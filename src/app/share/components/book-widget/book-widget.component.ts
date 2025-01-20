import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Trainer } from '../../../interfaces/trainer.interface';
import { FetchDataService } from '../../services/fetch-data.service';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-book-widget',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButton,
    CommonModule,
    MatIcon
  ],
  templateUrl: './book-widget.component.html',
  styleUrl: './book-widget.component.scss'
})
export class BookWidgetComponent {
  form: FormGroup;
  trainers: Trainer[] = [];
  today = new Date();
  days: Date[] = [];
  slots = ['10:00 AM', '12:00 PM', '16:00 PM'];

  constructor(
    private fb: FormBuilder,
    private fetchDataService: FetchDataService
  ) {
      this.form = this.fb.group({ trainer: [''] })
    }

  ngOnInit() {
    this.fetchDataService.fetchData().subscribe(
      (response) => {
        this.trainers = response
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    )
    this.setDays()
  }

  setDays() {
    if (!this.days.length) {
      for (let i = 0; i < 7; i++) {
        const nextDate = new Date(this.today);
        nextDate.setDate(this.today.getDate() + i);
        this.days.push(nextDate); 
      }
    }
  }

  onSubmit() {
    console.log(this.trainers.find(trainer => trainer.name === this.form.value.trainer));
  }

}
