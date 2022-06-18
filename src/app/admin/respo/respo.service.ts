import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respo } from './respo';

@Injectable({
  providedIn: 'root'
})
export class RespoService {

  private baseUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getRespo(id: number): Observable<Respo> {
    return this.http.get<Respo>(`${this.baseUrl}/user/findResponsable/${id}`);
  }

  createRespo(respo: Respo,id : number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/user/saveRespo/${id}`, respo);
  }

  updateRespo( respo: Respo): Observable<Object> {
    return this.http.put(`${this.baseUrl}/user/updateRespo`, respo);
  }

  deleteRespo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/deleteRespo/${id}`, { responseType: 'text' });
  }

  getResposList(): Observable<Respo[]> {
    return this.http.get<Respo[]>(`${this.baseUrl}/user/getAllRespo`);
  }

}
