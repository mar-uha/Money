import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBudgetComponent } from './dialog-edit-budget.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditBudgetComponent', () => {
  let component: DialogEditBudgetComponent;
  let fixture: ComponentFixture<DialogEditBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditBudgetComponent],
      imports: [MatDialogModule, MatInputModule, FormsModule, BrowserAnimationsModule],
      providers: [{
        provide: MatDialogRef, useValue: {}
      }, {
        provide: MAT_DIALOG_DATA, useValue: {}
      }]
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
