import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TitleComponent} from "../../components/title.component";
import {HeaderComponent} from "../../components/header.component";

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, HeaderComponent],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  experience = [
    {job: 'Angular developer', company: 'Satbayev University | IDET', date: '2017 - now', link: 'https://idet.kz/'},
    {job: 'Angular developer(remote)', company: 'HardCode', date: '2019 - 2020', link: 'https://hardcode.kz/'},
    {job: 'Programmer', company: 'KazPost', date: '2016 - 2017', link: 'https://post.kz/'}
  ];
  education = [
    {job: 'Bachelor of Computer Science', company: 'Suleyman Demirel University', date: '2011 - 2016', link: 'https://sdu.edu.kz/'}
  ];
  skills = ['Html', ' Css', ' Js', ' Angular2+', ' Git', ' Figma', ' Bootstrap'];
  languages = ['Kazakh', ' Russian', ' English'];
}
