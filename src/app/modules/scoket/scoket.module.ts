import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoketRoutingModule } from './scoket-routing.module';
import { ScoketComponent } from './scoket.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ScoketRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ScoketComponent]
})
export class ScoketModule { }
