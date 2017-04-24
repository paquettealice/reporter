/**
 * Created by alice on 22/04/17.
 */

import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { Report } from './report.model';
import { AppStore } from "../app.store";

@Injectable()
export class ReportService {
  reports: Observable<Array<Report>>;

  constructor(private store: Store<AppStore>) {
    this.reports = store.select('reports');
  }
}

@Injectable()
export class SelectedReportService {
  selectedReport: Observable<Report>;

  constructor(private store: Store<AppStore>) {
    this.selectedReport = store.select('selectedReport');
  }
}
