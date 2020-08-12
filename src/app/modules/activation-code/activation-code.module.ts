import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationCodeRoutingModule } from './activation-code-routing.module';
import { ActivationCodeComponent } from './activation-code.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ActivationCodeRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ActivationCodeComponent]
})
export class ActivationCodeModule { }
