import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIncident } from '../models/incident';
import { IKpe } from '../models/kpe';

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
  getKPEByUser(userId: number): Observable<IKpe[]> {
    return this.http.get<IKpe[]>(
      `./assets/data/user` + userId + `/kpe.json`
    );
  }

}
