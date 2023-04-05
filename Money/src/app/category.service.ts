import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any[]> {
    return this.http.get<any[]>('/api/category');
  }

  public updateBudget(categoryId: number, budget: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<any>(`/api/category/${categoryId}/updateBudget`, budget.toString(), httpOptions);
  }
}
