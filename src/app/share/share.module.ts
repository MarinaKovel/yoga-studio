import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactButtonComponent } from './components/contact-button/contact-button.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactButtonComponent,
  ],
  exports: [ContactButtonComponent]
})
export class ShareModule { }
