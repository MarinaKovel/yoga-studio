import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassItemComponent } from './components/class-item/class-item.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { MatButton } from '@angular/material/button';
import { ShareModule } from '../share/share.module';

const routes: Routes = [
  { path: '', component: ClassesComponent }
];

@NgModule({
  declarations: [ClassesComponent, ClassItemComponent, ClassListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButton,
    ShareModule
  ]
})
export class ClassesModule { }
