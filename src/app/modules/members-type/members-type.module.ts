import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersTypeRoutingModule } from './members-type-routing.module';
import { MembersTypeComponent } from './members-type.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MembersTypeRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MembersTypeComponent]
})
export class MembersTypeModule { }
