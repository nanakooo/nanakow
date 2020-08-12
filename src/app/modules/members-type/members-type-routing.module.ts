import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersTypeComponent } from './members-type.component';
const routes: Routes = [
  {
    path: '',
    component: MembersTypeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersTypeRoutingModule { }
