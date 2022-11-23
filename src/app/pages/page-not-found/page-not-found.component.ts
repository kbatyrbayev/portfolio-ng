import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-page-not-found',
  template: `
    <section class="page-not-found">
      <h1 class="main-title">404</h1>
      <p class="text">Oops, you've lost in site <br>
        We can't find the page that you're looking for...</p>
      <a class="redirect-button" [routerLink]="'/'+page">Go {{page}}</a>
    </section>
  `,
  styles: [
    `
      .page-not-found {
        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
          &:not(:last-child) {
            margin-bottom: 3rem;
          }
        }
      }

      .main-title {
        font-size: 3rem;
      }

      .text {
        text-align: center;
      }

      .redirect-button {
        background: goldenrod;
        padding: 1rem 2rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;

        &:hover {
          background: darkgoldenrod;
        }
      }
    `
  ]
})
export class PageNotFoundComponent {

  @Input() page = 'about';
}
