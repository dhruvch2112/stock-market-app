import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LogoscreenComponent } from './logoscreen/logoscreen.component';

export const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logoscreen', component: LogoscreenComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' }
];