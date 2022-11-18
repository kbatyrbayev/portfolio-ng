import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts-card',
  template: `
    <div class="card">
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
export class ContactsCardComponent implements OnInit {

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
