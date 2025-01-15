import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSelect, MatOption } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: '',
  component: ContactComponent
}];

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatGridTile,
    LayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatSelect,
    MatOption,
    HttpClientModule
  ]
})
export class ContactModule { }
