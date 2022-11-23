import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IWork, WorkService} from "../../services/work.service";
import {CommonModule} from "@angular/common";
import {TitleComponent} from "../../components/title.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

@Component({
  standalone: true,
  selector: 'app-about-work',
  imports: [CommonModule, TitleComponent, PageNotFoundComponent],
  templateUrl: './about-work.component.html',
  styleUrls: ['./about-work.component.scss']
})
export class AboutWorkComponent implements OnInit {

  id!: number;
  work!: IWork;
  loading = false;

  constructor(private route: ActivatedRoute,
              private service: WorkService) {
    this.route.params.subscribe(res => {
      this.id = +res['id'];
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.service.getWorkById(this.id)
      .subscribe(res => {
        this.work = res!;
        console.log(this.work, 'this work')
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  }

}
