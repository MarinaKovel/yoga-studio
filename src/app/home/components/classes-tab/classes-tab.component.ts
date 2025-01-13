import { Component, Input } from '@angular/core';
import { YogaClasses } from '../../../interfaces/yoga-classes.interface';
import { MatDialog } from '@angular/material/dialog';
import { dialogContent } from '../../../share/constants';
import { CustomDialogComponent } from '../../../share/components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-classes-tab',
  templateUrl: './classes-tab.component.html',
  styleUrl: './classes-tab.component.scss'
})
export class ClassesTabComponent {
  @Input() data!: YogaClasses;

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
