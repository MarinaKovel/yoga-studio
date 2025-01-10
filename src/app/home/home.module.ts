import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatButton } from '@angular/material/button';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButton
  ]
})
export class HomeModule { }
