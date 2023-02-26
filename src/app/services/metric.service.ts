import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMetric } from '../models/metric';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  constructor(private http: HttpClient) {}

  getMetricsByUser(userId:number): Observable<IMetric[]> {
    return this.http.get<IMetric[]>(`./assets/user`+userId+`.metrics.json`);
  }
}
