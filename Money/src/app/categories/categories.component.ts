import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditBudgetComponent } from '../dialog-edit-budget/dialog-edit-budget.component';
import { DialogEditBudgetData } from '../dialog-edit-budget/dialog-edit-budget-data';
import { Category } from '../models/category';

@Component({
  selector: 'mny-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  protected categories: Category[] = [];

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Open a dialog to edit the category's budget.
   * @param category Category to edit.
   */
  protected openDialog(category: Category): void {
    // open the edit dialog
    const dialogRef = this.dialog.open(DialogEditBudgetComponent, {
      data: {
        id: category.id,
        name: category.name,
        budget: category.budget
      } as DialogEditBudgetData,
    });

    dialogRef.afterClosed().subscribe((dialogData: DialogEditBudgetData) => {
      if (dialogData) {
        // update the category's budget
        this.categoryService.updateBudget(dialogData.id, dialogData.budget)
          .subscribe(() => this.loadData());
      }
    });
  }

  /**
   * Get all categories available.
   */
  private loadData(): void {
    this.categoryService.get().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }
}
