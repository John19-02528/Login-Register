import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePageRoutingModule } from './sample-routing.module';

import { SamplePage } from './sample.page';
import { NewScreenComponent } from '../new-screen/new-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePageRoutingModule
  ],
  declarations: [SamplePage, NewScreenComponent]
})
export class SamplePageModule {}
