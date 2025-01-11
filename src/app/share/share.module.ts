import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactButtonComponent } from './components/contact-button/contact-button.component';
import { OutlinedButtonComponent } from './components/outlined-button/outlined-button.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactButtonComponent,
    OutlinedButtonComponent
  ],
  exports: [ContactButtonComponent, OutlinedButtonComponent]
})
export class ShareModule { }
