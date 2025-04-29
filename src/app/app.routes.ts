import { Route } from '@angular/router';
import { RsvpManagerComponent } from './pages/rsvp-manager.component';

export const routes: Route[] = [
  { path: '', component: RsvpManagerComponent, pathMatch: 'full' },
];
