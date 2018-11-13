import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './interceptors';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AtTableComponent } from './at-table/at-table.component';

// import {NgxAirtableModule} from 'ngx-airtable/src/ngx-airtable.module';

@NgModule({
  declarations: [
    AppComponent,
    AtTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    // import HttpClientModule after BrowserModule.
    /* HttpClientXsrfModule.withOptions({
       cookieName: 'My-Xsrf-Cookie',
       headerName: 'My-Xsrf-Header',
     }),*/

    AppRoutingModule,
    // NgxAirtableModule.forRoot({apiKey: 'keyeA6BKZ22n3MZzd'}),
    MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatTabsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
