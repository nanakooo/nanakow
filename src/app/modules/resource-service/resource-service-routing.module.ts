import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceServiceComponent } from './resource-service.component';
const routes: Routes = [
  {
    path: '',
    component: ResourceServiceComponent
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
export class ResourceServiceRoutingModule { }
