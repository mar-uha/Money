import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogEditBudgetData } from './dialog-edit-budget-data';

@Component({
  selector: 'app-dialog-edit-budget',
  templateUrl: './dialog-edit-budget.component.html',
  styleUrls: ['./dialog-edit-budget.component.sass']
})
export class DialogEditBudgetComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEditBudgetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogEditBudgetData,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
