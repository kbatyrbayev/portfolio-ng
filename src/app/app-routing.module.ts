import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'about'},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', loadComponent: () => import('./pages/contacts/contacts.component').then(c => c.ContactsComponent)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
