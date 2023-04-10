import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'mny-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  fileName = '';
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.get().subscribe((data: Transaction[]) => {
      this.transactions = data;
    })
  }

  /**
   * Event throw when a file is selected (bind on the event "change").
   * Import transaction in the file passed in parameter.
   * @param event Event triggered
   * @returns 
   */
  protected onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement
    if (!inputElement.files?.length) {
      return;
    }

    const file: File = inputElement.files[0];

    this.fileName = file.name;

    this.transactionService.importTransaction(file).subscribe();
  }
}
