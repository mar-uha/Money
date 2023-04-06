import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private get categoriesURL(): string { return '/api/category' }

  constructor(private http: HttpClient) { }

  /**
   * List all categories
   * @returns 
   */
  public get(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.categoriesURL}`);
  }

  /**
   * Update the budget for the category id passed in parameter.
   * @param categoryId Id of the category to update.
   * @param budget New budget. 
   * @returns 
   */
  public updateBudget(categoryId: number, budget: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<void>(`${this.categoriesURL}/${categoryId}/updateBudget`, budget.toString(), httpOptions);
  }
}
