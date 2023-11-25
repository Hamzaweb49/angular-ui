import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isMenuExpanded = false;

  dashboardData = [
    {
      total: 80,
      totalInfo: 'Cases with alerts',
      details: 'INSUFFICIENCY, VERIFICATION ALERTS & EXCEPTIONAL APPROVAL'
    },
    {
      total: 300,
      totalInfo: 'Active Cases',
      details: 'ALL OPEN & ON-HOLD CASES'
    },
    {
      total: 20,
      totalInfo: 'Unclaimed Cases',
      details: 'CASES WHICH ARE NOT CLAIMED BY THE AGENTS'
    },
    {
      total: 80,
      totalInfo: 'New Reports',
      details: 'CASES WITH NEW REPORTS UPLOADED'
    }
  ];

  attentionCasesData = [
    {
      total: 40,
      heading: 'Insufficiency Cases',
      headingInfo: 'Cases where insufficient raised'
    },
    {
      total: 20,
      heading: 'Verification Alerts',
      headingInfo: 'Cases with verification status orange & red'
    },
    {
      total: 20,
      heading: 'Missing Documents',
      headingInfo: 'List of all the employees where documents are not submitted'
    }
  ];

  constructor() {}

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }
}
