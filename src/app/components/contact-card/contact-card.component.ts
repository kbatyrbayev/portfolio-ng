import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "../header.component";

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  selector: 'app-contact-card',
  template: `
    <div class="card">
      <app-header [title]="contact.title"></app-header>
      <ng-container [ngSwitch]="contact.type">
        <a class="card__link" *ngSwitchCase="linkType.Link" [attr.href]="'https://www.'+contact.link"
           target="_blank">{{contact.link}}</a>
        <a class="card__link" *ngSwitchCase="linkType.File" [attr.href]="'./assets/cv_pdf.pdf'"
           target="_blank">{{contact.link}}</a>
        <a class="card__link" *ngSwitchCase="linkType.Email" [attr.href]="'mailto:'+contact.link"
           target="_blank">{{contact.link}}</a>
      </ng-container>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 2rem;
      padding-right: 2rem;

      &__link {
        font-size: 1.2rem;
        word-break: break-all;
      }
    }

    @media (max-width: 575px) {
      .card__link {
        font-size: 1rem;
      }
    }
  `]
})
export class ContactCardComponent {
  linkType = LinkType;
  @Input() contact!: IContact;
}

export interface IContact {
  title: string;
  link: string;
  type: LinkType;
}

export enum LinkType {
  Link,
  File,
  Email
}
