import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditBudgetComponent } from '../dialog-edit-budget/dialog-edit-budget.component';
import { DialogEditBudgetData } from '../dialog-edit-budget/dialog-edit-budget-data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  protected categories: any[] = [];

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  protected openDialog(category: any): void {
    const dialogRef = this.dialog.open(DialogEditBudgetComponent, {
      data: {
        id: category.id,
        name: category.name,
        budget: category.budget
      } as DialogEditBudgetData,
    });

    dialogRef.afterClosed().subscribe((dialogData: DialogEditBudgetData) => {
      if (dialogData) {
        console.log('The dialog was closed', dialogData);
        this.categoryService.updateBudget(dialogData.id, dialogData.budget).subscribe(() =>
        this.loadData()
        );
      }
    });
  }

  private loadData(): void {
    this.categoryService.get().subscribe((data) => {
      this.categories = data;
    });
  }

}
