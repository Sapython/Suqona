import { ProfileComponent } from './../profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MessagesComponent } from '../messages/messages.component';
import { MyAdsComponent } from '../my-ads/my-ads.component';
import { SellComponent } from '../sell/sell.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'Home', 
        component:HomeComponent,
      },
      {
        path: 'Messages',
        component:MessagesComponent,
      },
      {
        path: 'Sell',
        component:SellComponent,
      },
      {
        path: 'MyAds',
        component:MyAdsComponent,
      },
      {
        path: 'Profile',
        component:ProfileComponent,
      },
      
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
