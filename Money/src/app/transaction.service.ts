import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './models/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private get transactionsURL(): string { return '/api/transaction' }

  constructor(private http: HttpClient) { }

  /**
   * Return all transactions in database.
   * @returns 
   */
  public get(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsURL);
  }

  /**
   * Import new transactions from CSV file in database.
   * @param file CSV File to import.
   * @returns 
   */
  public importTransaction(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('transactionsFile', file, file.name);

    return this.http.post<void>(`${this.transactionsURL}/import`, formData);
  }
}
