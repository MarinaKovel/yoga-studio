import { Component, ElementRef, ViewChild } from '@angular/core';
import { FetchDataService } from '../../../share/services/fetch-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Trainer } from '../../../interfaces/trainer.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  data: Trainer[] = [];
  page: number = 1;
  limit: number = 10;
  allTeam: number = 31;
  maxPage: number = Math.ceil(this.allTeam / this.limit);
  isLoading: boolean = true;

  @ViewChild('observeScroll', { static: true }) observeScroll!: ElementRef;
  private intersectionObserver!: IntersectionObserver;

  constructor(
    private fetchDataService: FetchDataService, 
    public snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initIntersectionObserver();
    this.loadData();
  }

  ngOnDestroy() {
    this.cleanupIntersectionObserver();
  }

  private initIntersectionObserver() {
    const options: IntersectionObserverInit = {
      root: null, // Observe within the viewport
      rootMargin: '0px', // No margin offset
      threshold: 0.5, // 50% of the element must be visible
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadData();
          entry.target.classList.add('in-view');
        } 
      });
    }, options);

    // Start observing the target element
    this.intersectionObserver.observe(this.observeScroll.nativeElement);
  }

  private loadData() {
    if (this.page <= this.maxPage) {
      this.fetchDataService.fetchData(`?limit=10&page=${this.page}`).subscribe(
      (response) => {
        this.data = this.data.concat(response)
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
        this.openSnackBar()
      }
    );
    this.page++
    } else {
      this.isLoading = false;
    }
  }

  private cleanupIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  openSnackBar() {
    this.snackBar.open('Fetching error', 'X', {
      duration: 1500,
    });
  }
}
