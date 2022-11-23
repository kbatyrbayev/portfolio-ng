import {Component, Input} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-header',
  template: `<h3 class="title">{{title}}</h3>`,
  styles: [
    `
      .title {
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-weight: normal;
        position: relative;
        color: goldenrod;

        &:before, &:after {
          content: '';
          position: absolute;
          bottom: 0;
          background: #fff;
        }

        &:before {
          left: 0;
          width: 3rem;
          height: 3px;
        }

        &:after {
          left: 3.2rem;
          width: calc(100% - 3.2rem);
          height: 1px;
        }
      }

      @media (max-width: 767px) {
        .title {
          font-size: 1.2rem;
        }
      }
      @media (max-width: 566px) {
        .title {
          font-size: 1.5rem;
        }
      }
    `
  ]
})

export class HeaderComponent {
  @Input() title = '';
}
