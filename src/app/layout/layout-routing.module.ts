import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'member-list',
        loadChildren: '../modules/members-list/members-list.module#MembersListModule',
        canActivate: [],
        data: {
          breadcrumb: '会员列表管理'
        }
      },
      {
        path: 'member-type',
        loadChildren: '../modules/members-type/members-type.module#MembersTypeModule',
        canActivate: [],
        data: {
          breadcrumb: '会员类型管理'
        }
      },
      {
        path: 'activation-code',
        loadChildren: '../modules/activation-code/activation-code.module#ActivationCodeModule',
        canActivate: [],
        data: {
          breadcrumb: '激活码管理'
        }
      },
      // {
      //   path: 'scoket',
      //   loadChildren: '../modules/scoket/scoket.module#ScoketModule',
      //   canActivate: [],
      //   data: {
      //     breadcrumb: 'scoket设备管理'
      //   }
      // },
      {
        path: 'resource-service',
        loadChildren: '../modules/resource-service/resource-service.module#ResourceServiceModule',
        canActivate: [],
        data: {
          breadcrumb: '资源服务管理'
        }
      },{
        path:'small-mi',
        loadChildren:'../modules/small-mi/small-mi.module#SmallMiModule',
        canActivate: [],
        data: {
          breadcrumb: '微小秘管理'
        }
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'member-list',
        canActivate: []
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
