import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FetchDataService } from './fetch-data.service';
import { Pose } from '../../interfaces/pose.interface';

@Injectable({
  providedIn: 'root'
})
export class BeginerPosesService {

  constructor(private fetchDataService: FetchDataService) {}

  getBeginnerPoses() {
    return this.fetchDataService.fetchPoses().pipe(
      map(poses => poses.filter((pose: Pose) => pose.level === 1))
    );
  }
}
