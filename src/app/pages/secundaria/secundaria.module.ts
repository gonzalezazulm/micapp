import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecundariaPageRoutingModule } from './secundaria-routing.module';

import { SecundariaPage } from './secundaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecundariaPageRoutingModule
  ],
  declarations: [SecundariaPage]
})
export class SecundariaPageModule {}
