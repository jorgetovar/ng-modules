import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';
import {UserService} from '../core/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CustomerLoginComponent
  ],
  declarations: [CustomerLoginComponent]
})
export class CustomerModule {

  constructor() {
  }
}
