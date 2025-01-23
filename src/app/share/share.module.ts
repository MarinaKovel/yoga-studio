import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactButtonComponent } from './components/contact-button/contact-button.component';
import { OutlinedButtonComponent } from './components/outlined-button/outlined-button.component';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { BookWidgetComponent } from './components/book-widget/book-widget.component';
import { DifficultyLabelPipe } from './pipes/difficulty-label.pipe';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { BreathPipe } from './pipes/breath.pipe';

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
    DifficultyLabelPipe,
    ProgressTrackerComponent,
    BreathPipe
  ],
  exports: [
    ContactButtonComponent, 
    OutlinedButtonComponent, 
    CustomDialogComponent,
    BookWidgetComponent,
    DifficultyLabelPipe,
    ProgressTrackerComponent
  ]
})
export class ShareModule { }
