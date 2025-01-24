import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {

  }


  onSubmit() {
    console.log(this.form.value);
    localStorage.setItem('user', JSON.stringify(this.form.value))
  }
}
