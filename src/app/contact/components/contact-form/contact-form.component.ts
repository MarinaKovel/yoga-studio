import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
 form: FormGroup;

 constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    message: [''],
    location: [''],
  })
 }

 onSubmit() {
  if (this.form.valid) {
    console.log('Form submitted', this.form.value);
  }
 }
}
