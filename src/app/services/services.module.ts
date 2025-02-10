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
import { YogaSessionComponent } from './pages/yoga-session/yoga-session.component';
import { MeditationSessionComponent } from './pages/meditation-session/meditation-session.component';
import { YogaPoseTrackerComponent } from './pages/yoga-pose-tracker/yoga-pose-tracker.component';
import { MatIcon } from '@angular/material/icon';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { CompletedComponent } from '../share/components/completed/completed.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'yoga-session', component: YogaSessionComponent },
  { path: 'meditation-session', component: MeditationSessionComponent },
  { path: 'yoga-pose-tracker', component: YogaPoseTrackerComponent },
];

@NgModule({
  declarations: [
    ServicesComponent, 
    PoseTrackerComponent, 
    MyLevelComponent, 
    SessionProgressComponent,
    ProgressBarComponent,
    PoseListComponent,
    YogaSessionComponent,
    MeditationSessionComponent,
    YogaPoseTrackerComponent,
    ServiceCardComponent,
    
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
    MatDividerModule,
    MatIcon,
    CompletedComponent
]
})
export class ServicesModule { }
