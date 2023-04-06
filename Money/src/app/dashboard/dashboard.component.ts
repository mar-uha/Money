import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardYear } from '../models/dashboard-year';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  dashboardYear?: DashboardYear;
  selectedYear: number;
  yearsAvailable = [2023, 2022, 2021, 2020];

  constructor(private dashboardService: DashboardService) {
    this.selectedYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.dashboardService.get(this.selectedYear).subscribe((data: DashboardYear) => {
      this.dashboardYear = data;
    })
  }

  protected getDate(month: number): Date {
    return new Date(2000, month - 1, 2);
  }

  protected onYearChange(year: number): void {
    this.dashboardService.get(year).subscribe((data: DashboardYear) => {
      this.dashboardYear = data;
    })
  }
}
