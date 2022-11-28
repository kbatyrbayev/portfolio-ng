import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-loader',
  template: `
    <div class="loader"></div>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
      .loader {
        width: 80px;
        height: 80px;
      }

      .loader:after {
        content: '';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border-width: 6px;
        border-style: solid;
        border-color: goldenrod transparent goldenrod transparent;
        animation: rotate-ring 1.2s linear infinite;
      }

      @keyframes rotate-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `
  ]
})
export class LoadingComponent {
}
