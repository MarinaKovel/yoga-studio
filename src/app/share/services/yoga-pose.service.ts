import { Injectable } from '@angular/core';
import { EMPTY, forkJoin, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FetchDataService } from './fetch-data.service';
import { Pose } from '../../interfaces/pose.interface';
import { Trainer } from '../../interfaces/trainer.interface';


@Injectable({
  providedIn: 'root'
})
export class YogaPoseService {
  userId = 2;  // Free API is limited, so here is used request for team member

  constructor(private fetchDataService: FetchDataService) {}

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

  getPosesAndCategories() {
    return forkJoin({
      poses: this.fetchDataService.fetchPoses(),
      teamMembers: this.fetchDataService.fetchData(),
    });
  }

  getTrainer(id: number) {
    return this.fetchDataService.fetchData(`/${id}`)
    .pipe(
        catchError(err => {
            console.log(err)
            return EMPTY;
        })
    );
  }
}
