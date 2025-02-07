import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { TrainerAvailabilityComponent } from './components/trainer-availability/trainer-availability.component';
import { AvailableTrainersComponent } from './components/available-trainers/available-trainers.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: ':id', component: TrainerComponent }
];

@NgModule({
  declarations: [
    AboutComponent, 
    TrainerComponent, 
    TrainerAvailabilityComponent,
    AvailableTrainersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressBarModule,
    MatSnackBarModule,
    MatGridListModule,
    MatGridTile,
    MatSliderModule,
    FormsModule,
  ]
})
export class AboutModule { }
