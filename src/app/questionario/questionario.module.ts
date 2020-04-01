import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  NgxMaskIonicModule  } from 'ngx-mask-ionic'
import { IonicModule } from '@ionic/angular';
import { QuestionarioPageRoutingModule } from './questionario-routing.module';
import { QuestionarioPage } from './questionario.page';

@NgModule({
  imports: [
    NgxMaskIonicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionarioPageRoutingModule
  ],
  declarations: [QuestionarioPage]
})
export class QuestionarioPageModule {}
