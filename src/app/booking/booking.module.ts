import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './pages/booking/booking.component';
import { ShareModule } from '../share/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: BookingComponent
}];

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
