import { ProductComponent } from './../product/product.component';
import { ToolbarComponent } from './../toolbar/toolbar.component';
import { ProfileComponent } from './../profile/profile.component';
import { MyAdsComponent } from './../my-ads/my-ads.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { MessagesComponent } from '../messages/messages.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    HomeComponent,
    MessagesComponent,
    MyAdsComponent,
    ProfileComponent,
    ToolbarComponent,
    ProductComponent,
  ]
})
export class TabsPageModule {}
