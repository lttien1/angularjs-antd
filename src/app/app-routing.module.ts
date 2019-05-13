import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent, SettingsComponent } from './containers';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'settings/properties', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
