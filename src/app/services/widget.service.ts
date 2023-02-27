import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../models/event';
import { IIncident } from '../models/incident';
import { IKpe } from '../models/kpe';
import { ILab } from '../models/lab';

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
  getLabByUser(userId: number): Observable<ILab[]> {
    return this.http.get<ILab[]>(
      `./assets/data/user` + userId + `/lab.json`
    );
  }
  getDayEventByUser(userId: number): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(
      `./assets/data/user` + userId + `/dayEvent.json`
    );
  }

  getWeekEventByUser(userId: number): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(
      `./assets/data/user` + userId + `/weekEvent.json`
    );
  }
  

}
