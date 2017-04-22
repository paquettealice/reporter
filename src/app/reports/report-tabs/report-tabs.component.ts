import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-tabs',
  templateUrl: 'report-tabs.component.html',
  styleUrls: ['report-tabs.component.css']
})
export class ReportTabsComponent implements OnInit {
  tabs = ['sales', 'something', 'something something'];
  constructor() { }

  ngOnInit() {
  }

}
