import {Injectable, NgModule} from '@angular/core';
import {RouterModule, RouterStateSnapshot, Routes, TitleStrategy} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title} | Kairat Batyrbayev`);
    }
  }
}

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/about'},
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'works',
    title: 'Works',
    loadComponent: () => import('./pages/works/works.component').then(c => c.WorksComponent),
  },
  {
    path: 'works/:id',
    title: 'Work',
    loadComponent: () => import('./pages/about-work/about-work.component').then(c => c.AboutWorkComponent)
  },
  {
    path: 'contacts',
    title: 'Contacts',
    loadComponent: () => import('./pages/contacts/contacts.component').then(c => c.ContactsComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'})],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
})
export class AppRoutingModule {
}
