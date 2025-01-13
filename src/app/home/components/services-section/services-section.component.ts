import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../../share/components/custom-dialog/custom-dialog.component';
import { CARDS_DATA, dialogContent } from '../../../share/constants';
@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  cards = CARDS_DATA;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      maxWidth: '1200px',
      minWidth: '400px',
      data: dialogContent.bookSesson
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed. Result:', result);
    });
  }
}
