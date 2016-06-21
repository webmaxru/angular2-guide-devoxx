import {Component} from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { GuideComponent } from './guide.component'
import { PlacesComponent } from './places.component';
import { FeedbackComponent } from './feedback.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
  // template: `
  // <guide></guide>
  // <places></places>
  // <feedback></feedback>
	// `,
  directives:  [ROUTER_DIRECTIVES, GuideComponent, PlacesComponent, FeedbackComponent],
  providers: [ HTTP_PROVIDERS]
})
export class AppComponent { }
