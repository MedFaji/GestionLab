import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BudgetMember } from './budgetmember';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://localhost:8080';
  
    constructor(private http: HttpClient) { }

  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/user/findMembre/${id}`);
  }

  createMember(member: Member,idLabo: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/user/saveMembre/${idLabo}`, member);
  }

  updateMember(user: Member): Observable<Object> {
    return this.http.put(`${this.baseUrl}/user/updateMembre`, user);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/deleteMembre/${id}`, { responseType: 'text' });
  }

  getMemberList(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/user/getAllMembre`);
  }

  addBudgetMember(budgetMembre: BudgetMember,idMembre: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/budgetmembre/saveBudget/${idMembre}`,budgetMembre);
  }
}
