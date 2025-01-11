import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ShareModule } from '../share/share.module';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];


@NgModule({
  declarations: [
    HomeComponent, 
    BannerSectionComponent, 
    ServicesSectionComponent,
    SectionTitleComponent,
    ServiceCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButton,
    MatIcon,
    ShareModule
  ]
})
export class HomeModule { }
