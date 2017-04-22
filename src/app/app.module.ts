import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ReportTabsComponent } from './reports/report-tabs/report-tabs.component';
import { ReportMainComponent } from './reports/report-main/report-main.component';
import { ReportDetailComponent } from './reports/report-detail/report-detail.component';
import { ReportReducer } from './reports/report.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReportTabsComponent,
    ReportMainComponent,
    ReportDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      ReportReducer
      // future reducers
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
