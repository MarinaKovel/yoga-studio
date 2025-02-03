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
import { MyLevelComponent } from './components/my-level/my-level.component';
import { DifficultyLabelPipe } from '../share/pipes/difficulty-label.pipe';
import {MatDividerModule} from '@angular/material/divider';
import { SessionProgressComponent } from './components/session-progress/session-progress.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PoseListComponent } from './components/pose-list/pose-list.component';

const routes: Routes = [{
  path: '',
  component: ServicesComponent
}];

@NgModule({
  declarations: [
    ServicesComponent, 
    PoseTrackerComponent, 
    MyLevelComponent, 
    SessionProgressComponent,
    ProgressBarComponent,
    PoseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProgressTrackerComponent,
    ReactiveFormsModule,
    OutlinedButtonComponent,
    MatButton,
    MatFormFieldModule,
    MatLabel,
    MatInput,
    DifficultyLabelPipe,
    MatDividerModule
]
})
export class ServicesModule { }
