import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDuty } from '../models/duty';
import { IMetric } from '../models/metric';

@Injectable({
  providedIn: 'root',
})
export class DutyTableService {
  constructor(private http: HttpClient) {}

  getTableDataByUser(userId: number): Observable<IDuty[]> {
    return this.http.get<IDuty[]>(`./assets/user` + userId + `.duty.json`);
  }
}
