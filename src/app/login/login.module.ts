import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {  NgxMaskIonicModule  } from 'ngx-mask-ionic'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    NgxMaskIonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
