import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AirtableService} from '../airtable.service';
import {AirtableRecord} from '../airtable.type';
import {map} from 'rxjs/operators';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-at-table',
  templateUrl: './at-table.component.html',
  styleUrls: ['./at-table.component.scss']
})
export class AtTableComponent implements OnInit, AfterViewInit {
  baseDisplayedColumns: string[] = ['id', 'createdTime'];
  displayedColumns: string[];

  dataSource = new MatTableDataSource<any>();

  @Input() table: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private airtableService: AirtableService) {
  }

  ngOnInit(): void {

  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  onClick(): void {
    // this.airtableService.tables().subscribe(r => {
    //   console.log(r);
    // });

    this.airtableService.list(this.table).pipe(map(a => {
        const input: AirtableRecord[] = a.records as AirtableRecord[];

        const output: any[] = [];

        input.forEach(item => output.push(item.fields));
        return output;
      }
    )).subscribe(r => {
      const data: any[] = r;

      this.displayedColumns = [];

      if (data.length > 0) {
        const fields = data[0];
        Object.keys(fields).forEach(key => {
          this.displayedColumns.push(key);
          console.log(key + '=' + fields[key]);
        });
      }

      console.log(data);
      console.log(this.displayedColumns);

      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onDebug(obj: any): void {
    Object.keys(obj).forEach(key => console.log(key + '=' + obj[key]));
  }

  ngAfterViewInit(): void {
    this.onClick();
  }

  onExport() {
    this.exportAsExcelFile(this.dataSource.data, 'sample');
  }
}
