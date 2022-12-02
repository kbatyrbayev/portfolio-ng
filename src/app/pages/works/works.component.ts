import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkCardComponent} from "../../components/work-card/work-card.component";
import {TitleComponent} from "../../components/title.component";
import {IWork, WorkService} from "../../services/work.service";

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, WorkCardComponent, TitleComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  workType = WorkType;
  workTypeArray: IWorkTypeArray[] = [];
  works: IWorkEx[] = [];

  constructor(private service: WorkService) {
    this.service.getWorks()
      .subscribe(res => {
        console.log(res)
        this.works = res.map(r => {
          return {
            ...r,
            isShow: true
          }
        })
    });
    this.workTypeArray = Object.values(this.workType).map(r => {
      return {
        type: r,
        active: false
      }
    })
  }

  selectType(type: IWorkTypeArray) {
    type.active = !type.active;
    this.filterWorks();
  }

  filterWorks() {
    const types = this.workTypeArray.filter(f => f.active).map(r => r.type);
    if (types.length) {
      this.works.filter(work => {
        work.isShow = work.types.filter(value => types.includes(value)).length > 0;
      });
    } else if (types.length === 0) {
      this.works.forEach(f => f.isShow = true);
    }
  }

}


export enum WorkType {
  design = 'design',
  landing = 'landing',
  promo = 'promo',
  angular = 'angular'
}

interface IWorkTypeArray {
  type: WorkType;
  active: boolean;
}

interface IWorkEx extends IWork {
  isShow: boolean;
}
