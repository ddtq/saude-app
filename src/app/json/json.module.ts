import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsonPageRoutingModule } from './json-routing.module';

import { JsonPage } from './json.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsonPageRoutingModule
  ],
  declarations: [JsonPage]
})
export class JsonPageModule {}
