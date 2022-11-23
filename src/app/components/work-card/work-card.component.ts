import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IWork} from "../../pages/works/works.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  @Input() work!: IWork;

  constructor() { }

  ngOnInit(): void {
  }

}
