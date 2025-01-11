import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ShareModule } from '../share/share.module';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];


@NgModule({
  declarations: [HomeComponent, BannerSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButton,
    MatIcon,
    ShareModule
  ]
})
export class HomeModule { }
