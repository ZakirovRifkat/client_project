import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIncident } from '../models/incident';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  constructor(private http: HttpClient) {}

  getIncidentsByUser(userId: number): Observable<IIncident[]> {
    return this.http.get<IIncident[]>(
      `./assets/data/user` + userId + `/incidents.json`
    );
  }
}
