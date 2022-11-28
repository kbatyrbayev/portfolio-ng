import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {WorkType} from "../pages/works/works.component";
import {map, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class WorkService {
  constructor(private http: HttpClient) {
  }

  getWorks(): Observable<IWork[]> {
    return this.http.get<IWork[]>('assets/works.json');
  }

  getWorkById(id: number): Observable<IWork | undefined> {
    return this.getWorks()
      .pipe(
        map(res => {
          return res.find(f => f.id === id);
        })
      );
  }
}


export interface IWork {
  id: number;
  name: string;
  types: WorkType[];
  about: string;
  link: string;
  linkText: string;
}
