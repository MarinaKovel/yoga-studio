import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form: FormGroup;
  locationError: string | null = null;
  countryName: string | null = null;

  private apiKey = 'bb1aed6631d34067b97abc8fe5731f3b'; // Replace with your OpenCage API key
  private geocodeUrl = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
      location: [''],
    })
  }

  ngOnInit(): void {
    this.setLocation();
  }

  setLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.fetchCountry(latitude, longitude);

          this.form.patchValue({
            location: `Lat: ${latitude}, Long: ${longitude}`
          });
        },
        (error) => {
          this.locationError = 'Unable to fetch location.';
        }
      );
    } else {
      this.locationError = 'Geolocation is not supported by your browser.';
    }
  }

  fetchCountry(latitude: number, longitude: number): void {
    const params = {
      q: `${latitude}+${longitude}`,
      key: this.apiKey,
    };

    // FREE TRIAL LIMITED TO 2500 REQUESTS https://opencagedata.com/ (for Reverse geocoding - to get country from latitude and langitude)

    // this.http.get<any>(this.geocodeUrl, { params }).subscribe(
    //   (response) => {
    //     if (response && response.results.length > 0) {
    //       this.countryName = response.results[0].components.country;
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching country name:', error);
    //     this.locationError = 'Unable to fetch country name.';
    //   }
    // );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value, this.countryName);
    }
  }
}
