import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
    { path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule) },
    { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule), canActivate: [AuthGuard] },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: '**', redirectTo: 'home' },
];
