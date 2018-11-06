import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  Organization: [] = [];
  constructor(private http: HttpClient) { }

  getOrganization = (): Observable<[]> => {
    return this.http.get<[]>('../assets/data.json');
    // .pipe(
      // catchError(this)
    // );
  }
}
