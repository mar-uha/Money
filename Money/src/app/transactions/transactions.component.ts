import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  fileName = '';
  transactions: any[] = []; 

  constructor(private http: HttpClient, private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.transactionService.get().subscribe((data) => {
      this.transactions = data;
    })
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("transactionsFile", file, this.fileName);

      const upload$ = this.http.post("/api/transaction/import", formData);

      upload$.subscribe();
    }
  }
}
