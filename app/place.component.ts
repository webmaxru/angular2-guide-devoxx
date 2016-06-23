import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'place',
    template: `
  <div class="component"><h3 (click)="doVisit(name)" [ngClass]="{'visited': isVisited }">{{name}}</h3></div>
  `,
    styles: [`
  .visited {
    text-decoration: line-through;
  }
  `]
})
export class PlaceComponent {

    isVisited: boolean = false;

    @Input() name: string;
    @Output() visit: EventEmitter<any> = new EventEmitter();

    doVisit(placeName: string) {
        this.isVisited = !this.isVisited;
        this.visit.emit({ name: placeName });
    }

}
