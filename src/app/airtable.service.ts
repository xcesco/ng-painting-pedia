import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirtableService {

  constructor(private httpClient: HttpClient) {
  }

  list(tableName: string): Observable<any> {
    return this.httpClient.get(environment.endpointUrl + tableName);
  }

  tables(): Observable<HttpResponse<string>> {
    const response: Observable<HttpResponse<string>> = this.httpClient.get(environment.endpointAppUrl + 'api/docs', {
      observe: 'response',
      responseType: 'text'
    });

    return response;
  }
}
