import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TrainerComponent } from './pages/trainer/trainer.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: ':id', component: TrainerComponent }
];

@NgModule({
  declarations: [AboutComponent, TrainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressBarModule,
    MatSnackBarModule,
  ]
})
export class AboutModule { }
