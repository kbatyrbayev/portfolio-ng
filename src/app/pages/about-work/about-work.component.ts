import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {IWork, WorkService} from "../../services/work.service";
import {CommonModule} from "@angular/common";
import {TitleComponent} from "../../components/title.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {LoadingComponent} from "../../components/loading.component";
import {delay, finalize} from "rxjs";

@Component({
  standalone: true,
  selector: 'app-about-work',
  imports: [CommonModule, TitleComponent, PageNotFoundComponent, RouterModule, LoadingComponent],
  templateUrl: './about-work.component.html',
  styleUrls: ['./about-work.component.scss']
})
export class AboutWorkComponent implements OnInit {

  id!: number;
  data: IWork [] = [];
  work!: IWork;
  prevId!: number;
  nextId!: number;

  constructor(private route: ActivatedRoute,
              private service: WorkService) {
    this.route.params.subscribe(res => {
      this.id = +res['id'];
      this.loadData();
    });
  }

  ngOnInit(): void {
    this.service.getWorks()
      .subscribe(data => {
        this.data = data;
        this.loadData();
      });
  }

  loadData() {
    let index = this.data.findIndex(f => f.id === this.id);
    if (index > -1) {
      this.work = this.data[index];
      this.prevId = index === 0 ? this.data[this.data.length - 1].id : this.data[index - 1].id;
      this.nextId = index === this.data.length - 1 ? this.data[0].id : this.data[index + 1].id;
    }
  }

}
