import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkCardComponent} from "../../components/work-card/work-card.component";
import {TitleComponent} from "../../components/title.component";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, WorkCardComponent, TitleComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent{

  workType = WorkType;
  workTypeArray: IWorkTypeArray[] = [];
  works: IWork[] = [
    {id: 1, name: 'Маторные масла', types: [this.workType.design], isShow: true},
    {id: 2, name: 'NFT маркет', types: [this.workType.design], isShow: true},
    {id: 3, name: 'Сайт визитка для Шахматного клуба', types: [this.workType.design], isShow: true},
    {id: 4, name: 'Ninety one', types: [this.workType.design, this.workType.landing], isShow: true},
    {id: 5, name: 'IDET', types: [this.workType.angular], isShow: true}
  ]

  constructor(private title: Title) {
    this.title.setTitle('Works | Kairat Batyrbayev');
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
        work.isShow = work.types.filter(value => types.includes(value)).length > 0 ;
      });
    } else if(types.length === 0) {
      this.works.forEach(f => f.isShow = true);
    }
  }

}

export interface IWork {
  id: number;
  name: string;
  types: WorkType[];
  isShow: boolean;
}

export enum WorkType {
  design = 'design',
  angular = 'angular',
  landing = 'landing'
}

interface IWorkTypeArray {
  type: WorkType;
  active: boolean;
}
