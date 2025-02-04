import { Component, signal, computed } from '@angular/core';
import { FetchDataService } from '../../../share/services/fetch-data.service';
import { Trainer } from '../../../interfaces/trainer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-availability',
  templateUrl: './trainer-availability.component.html',
  styleUrls: ['./trainer-availability.component.scss'],
})
export class TrainerAvailabilityComponent {
  trainers = signal<Trainer[]>([]);
  selectedTrainerId = signal<string | null>(null);
  selectedDay = signal<number>(0);
  days: Date[] = []

  // Computed signal to get selected trainer
  selectedTrainer = computed(() => {
    const trainer = this.trainers().find(trainer => trainer.id === this.selectedTrainerId());
    return trainer;
  });

  // Computed signal to get available slots for the selected day
  availableSlots = computed(() => {
    const trainer = this.selectedTrainer();
    if (!trainer) return [];
    const day = this.selectedDay();
    return trainer.sessions[day] ?? [];
  });

  constructor(private fetchDataService: FetchDataService, private router: Router) {
    this.fetchTrainers();

    const urlParts = this.router.url.split('/')
    this.selectedTrainerId.set(urlParts[urlParts.length - 1]);

    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      this.days.push(nextDate);
    }
  }

  fetchTrainers() {
    this.fetchDataService.fetchData().subscribe(data => this.trainers.set(data));
  }

  selectTrainer(event: Event) {
    const selectElement = event?.target as HTMLSelectElement;
    this.selectedTrainerId.set(selectElement.value);
  }

  selectDay(event: Event) {
    const selectElement = event?.target as HTMLSelectElement;
    this.selectedDay.set(Number(selectElement.value));
  }
}