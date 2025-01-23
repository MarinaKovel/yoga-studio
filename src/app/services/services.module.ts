import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './pages/services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressTrackerComponent } from '../share/components/progress-tracker/progress-tracker.component';
import { PoseTrackerComponent } from './components/pose-tracker/pose-tracker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OutlinedButtonComponent } from '../share/components/outlined-button/outlined-button.component';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

const routes: Routes = [{
  path: '',
  component: ServicesComponent
}];

@NgModule({
  declarations: [ServicesComponent, PoseTrackerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProgressTrackerComponent,
    ReactiveFormsModule,
    OutlinedButtonComponent,
    MatButton,
    MatFormFieldModule,
    MatLabel,
    MatInput
]
})
export class ServicesModule { }
