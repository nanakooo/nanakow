import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceServiceRoutingModule } from './resource-service-routing.module';
import { ResourceServiceComponent } from './resource-service.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ResourceServiceRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ResourceServiceComponent]
})
export class ResourceServiceModule { }
