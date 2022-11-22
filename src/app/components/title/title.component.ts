import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-title',
  standalone: true,
  template: `<h3>{{title}}</h3>`,
  styles: [
    `
        h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      margin-bottom: 12px;
      font-weight: normal;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 3rem;
        height: 3px;
        background: #fff;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 3.2rem;
        width: calc(100% - 3rem);
        height: 1px;
        background: #fff;
      }
    }
    `
  ]
})

export class TitleComponent {

  @Input() title = '';

}