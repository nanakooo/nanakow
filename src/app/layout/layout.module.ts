import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
