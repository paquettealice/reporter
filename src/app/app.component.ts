import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Report } from './reports/report.model';
import { ReportService, SelectedReportService } from './reports/report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reports: Observable<Array<Report>>;
  selectedReport: Observable<Report>;

  title = 'app works!';
  tabs = ['Sales report', 'something else', 'another something else'];

  constructor(private reportService: ReportService, private selectedReportService: SelectedReportService) {
    this.reports = reportService.reports;
    this.selectedReport = selectedReportService.selectedReport;
  }
}

