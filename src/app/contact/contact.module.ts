import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [{
  path: '',
  component: ContactComponent
}];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatGridTile,
    LayoutModule
  ]
})
export class ContactModule { }
