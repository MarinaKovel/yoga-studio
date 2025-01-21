// Widget can be implemented from third party - in this case MutationObserver serves to catch actions

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Trainer } from '../../../interfaces/trainer.interface';
import { FetchDataService } from '../../services/fetch-data.service';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
    MatIcon,
    MatButtonToggleModule
  ],
  templateUrl: './book-widget.component.html',
  styleUrl: './book-widget.component.scss'
})
export class BookWidgetComponent {
  form: FormGroup;
  trainers: Trainer[] = [];
  today = new Date();
  days: Date[] = [];
  slots: string[] = [];
  finalSlots: any = {};
  currentDay: number = 0;

  @ViewChild('formElement', { static: true }) formElement!: ElementRef;
  private mutationObserver!: MutationObserver;

  constructor(
    private fb: FormBuilder,
    private fetchDataService: FetchDataService
  ) {
    this.form = this.fb.group({ trainer: [''], selectedDay: [''], selectedTime: [''] })
  }

  ngOnInit() {
    this.fetchDataService.fetchData().subscribe(
      (response) => {
        this.trainers = response;
        this.getSlotsNames(response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    )
    this.setDays()

    // Initialize the MutationObserver
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          this.getSlotsNames(this.trainers);

        }
        if (mutation.type === 'attributes' && 
            this.form.value.selectedDay !== undefined &&
            this.form.value.selectedDay !== this.currentDay
          ) {
            this.currentDay = this.form.value.selectedDay || 0
        }
      });
    });

    // Observe the form element for changes
    this.mutationObserver.observe(this.formElement.nativeElement, {
      childList: true, // Observe additions/removals of child elements
      attributes: true, // Observe changes to attributes
      subtree: true, // Observe changes to all descendants
    });
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

  getSlotsNames(allTrainers: Trainer[]) {
    const sessions = allTrainers
      .filter(trainer => trainer.name === this.form.value.trainer || !this.form.value.trainer)
      .map(trainer => trainer.sessions)
      .map(daySession => daySession[this.currentDay])
      .flat();

    this.slots = [...new Set(sessions.map(session => session.time))];

    this.slots.forEach(slot => {
      const freeSum = sessions.filter(session => session.time === slot).reduce((acc, currentVal) => acc + +currentVal.freeSlots, 0);
      this.finalSlots[slot] = freeSum;
    })
  }

  ngOnDestroy() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

}

