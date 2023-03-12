import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {
  
  private baseUrl = 'http://localhost:8080/api/soutenances';

  constructor(private http: HttpClient) { }

  addJurysToSoutenance(soutenanceId: number, juryIds: number[]): Observable<any> {
    const url = `${this.baseUrl}/${soutenanceId}/jurys/${juryIds.join()}`;
    return this.http.post(url, {});
  }
}
