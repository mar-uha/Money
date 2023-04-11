import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { CategoryService } from '../category.service';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEditBudgetComponent } from '../dialog-edit-budget/dialog-edit-budget.component';
import { Category } from '../models/category';
import { of } from 'rxjs';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  const mockCategoryService = jasmine.createSpyObj(['get', 'updateBudget']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent, DialogEditBudgetComponent],
      imports: [MatDialogModule],
      providers: [{
        provide: CategoryService,
        useValue: mockCategoryService
      }],
    })
      .compileComponents();

      mockCategoryService.get.and.returnValue(of<Category[]>([]));

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
