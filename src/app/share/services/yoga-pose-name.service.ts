import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FetchDataService } from './fetch-data.service';
import { Pose } from '../../interfaces/pose.interface';

@Injectable({
  providedIn: 'root'
})
export class YogaPoseNameService {
  constructor(private fetchDataService: FetchDataService) {}

  getPoseNames() {
    return this.fetchDataService.fetchPoses().pipe(
      map(poses => poses.map((pose: Pose) => pose.name))
    );
  }
}
