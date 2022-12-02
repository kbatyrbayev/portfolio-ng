import {Component} from "@angular/core";
import {animate, style, transition, trigger} from "@angular/animations";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-to-top',
  template: `
    <button *ngIf="show" [@inOutAnimation] class="button"
            [ngxScrollTo]="'#main'" [ngxScrollToOffset]="-100" [ngxScrollToDuration]="300">TO TOP
    </button>`,
  styles: [`
    :host {
      position: fixed;
      right: 30px;
      bottom: 30px;
    }
  `],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('1s ease-out',
              style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('1s ease-in',
              style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class ToTopComponent {
  show = false;

  constructor() {
    fromEvent(window, 'scroll').subscribe(_ => {
      const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.show = verticalOffset > 700;
    })
  }


}
