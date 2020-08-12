import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationCodeComponent } from './activation-code.component';
const routes: Routes = [
  {
    path: '',
    component: ActivationCodeComponent
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
export class ActivationCodeRoutingModule { }
