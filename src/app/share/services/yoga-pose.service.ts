import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { FetchDataService } from './fetch-data.service';
import { Pose } from '../../interfaces/pose.interface';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YogaPoseService {
  userId = 2;  // Free API is limited, so here is used request for team member

  constructor(private fetchDataService: FetchDataService, private http: HttpClient) {}

  getPoseNames() {
    return this.fetchDataService.fetchPoses().pipe(
      map(poses => poses.map((pose: Pose) => pose.name))
    );
  }

  getBeginnerPoses() {
    return this.fetchDataService.fetchPoses().pipe(
      map(poses => poses.filter((pose: Pose) => pose.level === 1))
    );
  }

  getUserPreferredPoses() {
    return this.fetchDataService.fetchData(`/${this.userId}`).pipe(
      switchMap(user => this.fetchDataService.fetchPoses(`?level=${user.level}`))
    );
  }
}
