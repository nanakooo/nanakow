import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersListRoutingModule } from './members-list-routing.module';
import { MembersListComponent } from './members-list.component';
import { MembersListAddComponent } from './members-list-add/members-list-add.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    MembersListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    MembersListComponent,
    MembersListAddComponent
  ]
})
export class MembersListModule { }
