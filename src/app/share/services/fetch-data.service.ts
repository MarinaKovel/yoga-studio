import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private apiUrl = `https://6789fbd1dd587da7ac284cfa.mockapi.io/team`;

  constructor(private http: HttpClient) {}

  fetchData(queryParams: string = ''): Observable<any> {
    return this.http.get(this.apiUrl + queryParams);
  }
}
