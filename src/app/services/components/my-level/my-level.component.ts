import {
  Component,
  AfterContentInit,
  AfterContentChecked,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-my-level',
  templateUrl: './my-level.component.html',
  styleUrl: './my-level.component.scss'
})
export class MyLevelComponent implements AfterContentChecked {
  @ContentChild('levelContent', { static: false }) levelContent!: ElementRef;

  private previousContent = '';

  ngAfterContentChecked() {
    // Called after every change detection cycle for projected content
    if (this.levelContent) {
      const currentContent = this.levelContent.nativeElement.textContent.trim();
      if (this.previousContent !== currentContent) {
        console.log('ngAfterContentChecked: Projected content changed to:', currentContent);
        this.previousContent = currentContent;
      }
    }
  }
}
