import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './pages/services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressTrackerComponent } from "../share/components/progress-tracker/progress-tracker.component";

const routes: Routes = [{
  path: '',
  component: ServicesComponent
}];

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProgressTrackerComponent
]
})
export class ServicesModule { }
