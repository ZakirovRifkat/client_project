import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIncident } from '../models/incident';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  constructor(private http: HttpClient) {}

  getIncidentsByUser(userId: number): Observable<IIncident[]> {
    return this.http.get<IIncident[]>(
      `./assets/data/user` + userId + `/incidents.json`
    );
  }
  // getEventByUser(userId: number): Observable<IIncident[]> {
  //   return this.http.get<IIncident[]>(
  //     './assets/data/user' + userId + '/events.json'
  //   );
  // }
  // getDataLaboratoryByUser(userId: number): Observable<IIncident[]> {
  //   return this.http.get<IIncident[]>(
  //     './assets/data/user' + userId + '/laboratory.json'
  //   );
  // }
}
