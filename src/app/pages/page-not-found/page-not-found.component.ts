import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <section class="page-not-found">
      <h1 class="main-title">404</h1>
      <p class="text">Oops, you've lost in site <br>
        We can't find the page that you're looking for...</p>
      <a class="redirect-button" routerLink="/about">Go About</a>
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
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
