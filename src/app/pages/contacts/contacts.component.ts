import {Component} from '@angular/core';
import {ContactCardComponent, IContact, LinkType} from "../../components/contact-card.component";
import {BehaviorSubject} from "rxjs";
import {CommonModule} from "@angular/common";
import {TitleComponent} from "../../components/title.component";

@Component({
  standalone: true,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [CommonModule, ContactCardComponent, TitleComponent],
})
export class ContactsComponent {

  contacts: IContact[] = [
    {title: 'telegram', link: 't.me/kairat_tg', type: LinkType.Link},
    {title: 'linkedin', link: 'linkedin.com/in/kbatyrbayev', type: LinkType.Link},
    {title: 'gmail', link: 'k.batyrbayev@gmail.com', type: LinkType.Email},
    {title: 'resume', link: 'download PDF', type: LinkType.File},
    {title: 'github', link: 'github.com/kbatyrbayev', type: LinkType.Link},
    {title: 'leetcode', link: 'leetcode.com/kbatyrbayev', type: LinkType.Link},
  ];

  clock = new BehaviorSubject(this.almatyTime);

  constructor() {
    setInterval(() => {
      this.clock.next(this.almatyTime);
    }, 1000)
  }

  get almatyTime() {
    return new Date().toLocaleString("en-US", {timeZone: "Asia/Almaty"});
  }
}
