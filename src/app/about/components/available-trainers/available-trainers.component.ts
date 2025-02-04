import { Component } from '@angular/core';
import { Trainer } from '../../../interfaces/trainer.interface';
import { YogaPoseService } from '../../../share/services/yoga-pose.service';
import { concatMap, exhaustMap, from, mergeMap, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-available-trainers',
  templateUrl: './available-trainers.component.html',
  styleUrl: './available-trainers.component.scss'
})
export class AvailableTrainersComponent {
  trainersIds: number[] = [1, 2, 3, 4];
  firstAvailableTrainer: Trainer | undefined;
  lastAvailableTrainer: Trainer | undefined;
  anyAvailableTrainer: Trainer | undefined;
  allTrainers: Trainer[] = [];
  allTrainersByOrder: Trainer[] = [];

  constructor(private yogaPoseService: YogaPoseService) { }

  ngOnInit() {
    this.getLastAvailableTrainer();
        this.getAnyAvailableTrainer();
        this.getFirstAvailableTrainer();
        this.getAllAvailableTrainersByOrder();
  }

  private getLastAvailableTrainer() {
    from(this.trainersIds)
      .pipe(
        switchMap((id) => this.yogaPoseService.getTrainer(id)),
        tap((result) => console.log(result))
      )
      .subscribe((trainer) => this.lastAvailableTrainer = trainer);
  }

  private getAnyAvailableTrainer() {
    from(this.trainersIds)
      .pipe(
        mergeMap((id) => this.yogaPoseService.getTrainer(id)),
        tap((result) => console.log(result))
      )
      .subscribe((trainer) => {
        this.anyAvailableTrainer = trainer;
        this.allTrainers.push(trainer);
    });
  }

  private getFirstAvailableTrainer() {
    from(this.trainersIds)
      .pipe(
        exhaustMap((id) => this.yogaPoseService.getTrainer(id)),
        tap((result) => console.log(result))
      )
      .subscribe((trainer) => this.firstAvailableTrainer = trainer);
  }

  private getAllAvailableTrainersByOrder() {
    from(this.trainersIds)
    .pipe(
      concatMap((id) => this.yogaPoseService.getTrainer(id)),
    )
    .subscribe((trainer) => this.allTrainersByOrder.push(trainer));
  }
}
