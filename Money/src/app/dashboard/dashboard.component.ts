import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardYear } from '../models/dashboard-year';

@Component({
  selector: 'mny-dashboard',
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

  /**
   * Return a JS Date from a month initilized to the 2nd day of the year 2000.
   * @param month Integer of the month. 1 = January
   * @returns 
   */
  protected getDate(month: number): Date {
    return new Date(2000, month - 1, 2);
  }

  /**
   * Event triggered when the user select a new year.
   * Get all necessary data for the year.
   * @param year year selected.
   */
  protected onYearChange(year: number): void {
    this.dashboardService.get(year).subscribe((data: DashboardYear) => {
      this.dashboardYear = data;
    })
  }
}
