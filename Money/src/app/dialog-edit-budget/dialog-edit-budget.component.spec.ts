import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBudgetComponent } from './dialog-edit-budget.component';

describe('DialogEditBudgetComponent', () => {
  let component: DialogEditBudgetComponent;
  let fixture: ComponentFixture<DialogEditBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
