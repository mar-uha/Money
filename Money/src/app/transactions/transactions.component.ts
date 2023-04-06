import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transactions',
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
