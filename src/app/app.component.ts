import {Component, OnInit} from '@angular/core';
import {AirtableService} from './airtable.service';


export interface PeriodicElement {
  id: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private airtableService: AirtableService) {
  }

  ngOnInit(): void {

  }


}
