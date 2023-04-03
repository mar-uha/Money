import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent {
  fileName = '';

  constructor(private http: HttpClient) {
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
