import { provideRouter, RouterConfig } from '@angular/router';

import { GuideComponent } from './guide.component'
import { PlacesComponent } from './places.component';
import { FeedbackComponent } from './feedback.component';

export const routes: RouterConfig = [
  { path: '', component: GuideComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'feedback', component: FeedbackComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
