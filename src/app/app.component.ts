import { Component } from '@angular/core';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
