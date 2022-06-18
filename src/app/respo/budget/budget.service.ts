import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Labo } from '../../admin/labo/labo';
import { Budget } from './Budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private baseUrl = 'http://localhost:8080';
  
    constructor(private http: HttpClient) { }
  
    getLabo(id: number): Observable<Labo> {
      return this.http.get<Labo>(`${this.baseUrl}/laboratoire/findLabo/${id}`);
    }

    getBudget(id: number): Observable<Budget> {
      return this.http.get<Budget>(`${this.baseUrl}/budgetlabo/findBudget/${id}`);
    }
  
    createBudget(budget: Budget,idLabo: number): Observable<Object> {
      return this.http.post(`${this.baseUrl}/budgetlabo/saveBudget/${idLabo}`, budget);
    }
  
    updateBudget( budget: Budget): Observable<Object> {
      return this.http.put(`${this.baseUrl}/budgetlabo/updateBudget`, budget);
    }
  
    deleteBudget(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/budgetlabo/deleteBudget/${id}`, { responseType: 'text' });
    }
  
    getBudgetList(): Observable<Budget[]> {
      return this.http.get<Budget[]>(`${this.baseUrl}/budgetlabo/getAllBudget`);
    }
}
