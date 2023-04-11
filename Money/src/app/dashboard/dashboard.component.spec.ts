import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardYear } from '../models/dashboard-year';
import { of } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockDashboardService = jasmine.createSpyObj(['get']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ MatFormFieldModule, MatSelectModule, BrowserAnimationsModule ],
      providers: [{
        provide: DashboardService,
        useValue: mockDashboardService
      }],
    })
    .compileComponents();

    mockDashboardService.get.and.returnValue(of<DashboardYear>());

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
