import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardYear } from './models/dashboard-year';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private get dashboardURL(): string { return '/api/dashboard' }

  constructor(private http: HttpClient) { }

  /**
   * The datas to display in a dashboard for the year passed in parameter.
   * @param year Year to display.
   * @returns 
   */
  public get(year: number) {
    return this.http.get<DashboardYear>(this.dashboardURL, { params: {year: year} });
  }
}
