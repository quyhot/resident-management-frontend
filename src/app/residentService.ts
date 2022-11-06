import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Resident, responseGet } from './resident';
import { Observable } from 'rxjs';

@Injectable()
export class ResidentService {

  constructor(private http: HttpClient) {}

  getResidents(): Observable<object> {
    return this.http.get('http://localhost:8010/resident')
  }
}
