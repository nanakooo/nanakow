import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmallMiComponent } from './small-mi.component';
const routes: Routes = [
  {
    path: '',
    component: SmallMiComponent
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
export class SmallMiRoutingModule { }
