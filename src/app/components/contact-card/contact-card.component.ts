import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { TitleComponent } from '../title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  selector: 'app-contact-card',
  template: `
    <div class="card">
      <app-title [title]="contact.title"></app-title>
      <h3>{{contact.title}}</h3>
      <ng-container [ngSwitch]="contact.type">
        <a *ngSwitchCase="linkType.Link" [attr.href]="'https://www.'+contact.link" target="_blank">{{contact.link}}</a>
        <a *ngSwitchCase="linkType.File" href="./assets/cv_pdf.pdf" target="_blank">{{contact.link}}</a>
        <a *ngSwitchCase="linkType.Email" [attr.href]="'mailto:'+contact.link" target="_blank">{{contact.link}}</a>
      </ng-container>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 2rem;
      padding-right: 2rem;
    }
    a {
      font-size: 1.2rem;
      word-break: break-all;
    }
    @media (max-width: 575px) {
      h3, a {
        font-size: 1rem;
      }
    }
  `]
})
export class ContactCardComponent implements OnInit {

  linkType = LinkType;

  @Input() contact!: IContact;

  constructor() {
  }

  ngOnInit(): void {
  }

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
