import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {IWork} from "../../services/work.service";

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  @Input() work!: IWork;
  date = new Date().getTime();

  constructor() { }

  ngOnInit(): void {
  }

}
