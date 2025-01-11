import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  standalone: true,
  imports: [
      MatIconModule,
      MatButton,
      MatIcon,
    ],
  styleUrl: './contact-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactButtonComponent {
  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    iconRegistry.addSvgIcon('arrowRight', sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/arrowRight.svg'));
  }
}
