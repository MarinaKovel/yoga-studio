import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ShareModule } from '../share/share.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Routes = [{
  path: '',
  component: AboutComponent
}];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressBarModule,
    MatSnackBarModule
  ]
})
export class AboutModule { }
