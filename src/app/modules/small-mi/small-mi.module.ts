import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SmallMiRoutingModule } from './small-mi-routing.module';
import { SmallMiComponent } from './small-mi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  imports: [
    CommonModule,
    SmallMiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzButtonModule
  ],
  declarations: [
    SmallMiComponent,

  ]
})
export class SmallMiModule { }


