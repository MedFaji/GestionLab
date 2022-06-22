import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AchatMaterial } from '../respo/besoin/AchatMateriel';
import { FraisInscription } from '../respo/besoin/FraisInscription';
import { Mobilite } from '../respo/besoin/Mobilite';
import { Member } from '../respo/member/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/user/findMembre/${id}`);
  }

  getMobilite(id: number): Observable<Mobilite> {
    return this.http.get<Mobilite>(`${this.baseUrl}/besoin/findMobilite/${id}`);
  }

  createMobilite(mobilite: Mobilite, idMembre: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/besoin/saveMobilite/${idMembre}`, mobilite);
  }

  updateMobilite(mobilite: Mobilite): Observable<Object> {
    return this.http.put(`${this.baseUrl}/besoin/updateMobilite`, mobilite);
  }

  deleteMobilite(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/besoin/deleteMobilite/${id}`, { responseType: 'text' });
  }

  getMobiliteList(): Observable<Mobilite[]> {
    return this.http.get<Mobilite[]>(`${this.baseUrl}/besoin/getAllMobilite`);
  }


  //ACHAT MATERIAL :

  getMateriel(id: number): Observable<AchatMaterial> {
    return this.http.get<AchatMaterial>(`${this.baseUrl}/besoin/findMateriel/${id}`);
  }

  createMateriel(mobilite: AchatMaterial, idMembre: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/besoin/saveMateriel/${idMembre}`, mobilite);
  }

  updateMateriel(mobilite: AchatMaterial): Observable<Object> {
    return this.http.put(`${this.baseUrl}/besoin/updateMateriel`, mobilite);
  }

  deleteMateriel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/besoin/deleteMateriel/${id}`, { responseType: 'text' });
  }

  getMaterielList(): Observable<AchatMaterial[]> {
    return this.http.get<AchatMaterial[]>(`${this.baseUrl}/besoin/getAllMateriel`);
  }



  // FRAIT D'INSCRIPTION :


  getInscription(id: number): Observable<FraisInscription> {
    return this.http.get<FraisInscription>(`${this.baseUrl}/besoin/findInscription/${id}`);
  }

  createInscription(fraisInscription: FraisInscription, idMembre: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/besoin/saveInscription/${idMembre}`, fraisInscription);
  }

  updateInscription(fraisInscription: FraisInscription): Observable<Object> {
    return this.http.put(`${this.baseUrl}/besoin/updateMateriel`, fraisInscription);
  }

  deleteInscription(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/besoin/deleteInscription/${id}`, { responseType: 'text' });
  }

  getInscriptionList(): Observable<FraisInscription[]> {
    return this.http.get<FraisInscription[]>(`${this.baseUrl}/besoin/getAllInscription`);
  }
}
