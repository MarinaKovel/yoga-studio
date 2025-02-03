import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private apiUrl = `https://6789fbd1dd587da7ac284cfa.mockapi.io/`;
  private team = 'team';
  private poses = 'poses';

  constructor(private http: HttpClient) {}

  fetchData(queryParams: string = ''): Observable<any> {
    return this.http.get(this.apiUrl + this.team + queryParams);
  }

  updateData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl + this.team}/${id}`, data);
  }

  fetchPoses(queryParams: string = ''): Observable<any> {
    return this.http.get(this.apiUrl + this.poses + queryParams);
  }
}
