import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  dashboardYears: any[] = [];
  
  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit(): void {
    this.dashboardService.get().subscribe((data) => {
      this.dashboardYears = data;
    })
  }

}
