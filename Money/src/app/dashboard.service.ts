import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public get(year: number) {
    return this.http.get<any[]>('/api/dashboard', { params: {year: year} });
  }
}
