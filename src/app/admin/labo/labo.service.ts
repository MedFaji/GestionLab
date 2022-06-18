import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Labo } from './labo';

@Injectable({
  providedIn: 'root'
})
export class LaboService {

    private baseUrl = 'http://localhost:8080';
  
    constructor(private http: HttpClient) { }
  
    getLabo(id: number): Observable<Labo> {
      return this.http.get<Labo>(`${this.baseUrl}/laboratoire/findLabo/${id}`);
    }
  
    createLabo(labo: Labo): Observable<Object> {
      return this.http.post(`${this.baseUrl}/laboratoire/saveLabo`, labo);
    }
  
    updateLabo( labo: Labo): Observable<Object> {
      return this.http.put(`${this.baseUrl}/laboratoire/updateLabo`, labo);
    }
  
    deleteLabo(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/laboratoire/deleteLabo/${id}`, { responseType: 'text' });
    }
  
    getLabosList(): Observable<Labo[]> {
      return this.http.get<Labo[]>(`${this.baseUrl}/laboratoire/getAllLabo`);
    }



    
}
