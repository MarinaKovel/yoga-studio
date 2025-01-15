import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    MatToolbar,
    RouterModule,
    MatButton,
    MatSidenavModule,
    MatIconModule,
    RouterOutlet
  ],
  exports: [FooterComponent, LayoutComponent]
})
export class CoreModule { }
