import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoketComponent } from './scoket.component';
const routes: Routes = [
  {
    path: '',
    component: ScoketComponent
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
export class ScoketRoutingModule { }
