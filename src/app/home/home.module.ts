import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ShareModule } from '../share/share.module';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ClassesSectionComponent } from './components/classes-section/classes-section.component';
import { MatTabsModule } from '@angular/material/tabs'
import { ClassesTabComponent } from './components/classes-tab/classes-tab.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];


@NgModule({
  declarations: [
    HomeComponent, 
    BannerSectionComponent, 
    ServicesSectionComponent,
    ClassesSectionComponent,
    SectionTitleComponent,
    ServiceCardComponent,
    ClassesTabComponent,
    TeamSectionComponent,
    BottomSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIcon,
    ShareModule,
    MatTabsModule,
    OverlayModule,
    MatDialogModule
  ],
})
export class HomeModule { }
