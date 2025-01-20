import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactButtonComponent } from './components/contact-button/contact-button.component';
import { OutlinedButtonComponent } from './components/outlined-button/outlined-button.component';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { BookWidgetComponent } from './components/book-widget/book-widget.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactButtonComponent,
    OutlinedButtonComponent,
    CustomDialogComponent,
    OverlayModule,
    MatDialogModule,
    BookWidgetComponent,
  ],
  exports: [
    ContactButtonComponent, 
    OutlinedButtonComponent, 
    CustomDialogComponent,
    BookWidgetComponent
  ]
})
export class ShareModule { }
