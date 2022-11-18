import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  experience = [
    { job: 'Angular developer', company: 'Satbayev University', date: '2017 - now'},
    { job: 'Angular developer', company: 'HardCode', date: '2019 - 2020'},
    { job: 'Programmer', company: 'KazPost', date: '2016 - 2017'}
  ];

  education = [
    { job: 'Bachelor of Computer Science', company: 'Suleyman Demirel University', date: '2011 - 2016'}
  ]

  skills = ['Html', ' Css', ' Js', ' Angular2+', ' d3.js', ' Git', ' Figma']

  constructor() { }

  ngOnInit(): void {
  }

}
