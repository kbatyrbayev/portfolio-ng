import {Component, OnInit} from '@angular/core';
import {ContactCardComponent, IContact, LinkType} from "../../components/contact-card/contact-card.component";
import {BehaviorSubject} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports:[CommonModule, ContactCardComponent],
})
export class ContactsComponent implements OnInit {

  contacts: IContact[] = [
    {title: 'telegram', link: 't.me/kairat_tg', type: LinkType.Link},
    {title: 'linkedin', link: 'linkedin.com/in/kbatyrbayev', type: LinkType.Link},
    {title: 'gmail', link: 'k.batyrbayev@gmail.com', type: LinkType.Email},
    {title: 'resume', link: 'download PDF', type: LinkType.File},
  ]

  clock = new BehaviorSubject(this.almatyTime);

  constructor() {
  }

  get almatyTime() {
    return new Date().toLocaleString("en-US", {timeZone: "Asia/Almaty"});
  }

  ngOnInit(): void {
    setInterval(() => {
      this.clock.next(this.almatyTime);
    }, 1000)
  }

}
