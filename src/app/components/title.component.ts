import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <div class="title-wrapper">
      <h1 class="title">{{title}}</h1>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .title-wrapper {
        margin-bottom: 4rem;
        text-align: center;
      }

      .title {
        font-size: 3rem;
        line-height: 3.4rem;
        font-weight: normal;
        text-transform: uppercase;

        &:after {
          content: '';
          display: block;
          margin: 0 auto;
          width: 4rem;
          height: 3px;
          border-radius: 3px;
          background: goldenrod;
        }
      }
      @media (max-width: 991px) {
        .title {
          font-size: 2rem;
        }
      }
      @media (max-width: 767px) {
        .title {
          font-size: 1.5rem;
        }
      }
      @media (max-width: 566px) {
        .title {
          font-size: 2rem;
          line-height: 2.4rem;
        }
      }
    `
  ]
})

export class TitleComponent {
  @Input() title = '';
}
