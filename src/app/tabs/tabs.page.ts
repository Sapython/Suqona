import { Component } from '@angular/core';
import { DataProviderDirective } from '../directives/data-provider.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public dataProvider:DataProviderDirective) {}

  toggleSidebar(){
    console.log("Control ",this.dataProvider.sidebarToggle);
    if (!this.dataProvider.sidebarToggle){
      this.dataProvider.sidebarToggle=!this.dataProvider.sidebarToggle
    } else {
      this.dataProvider.sidebarToggle=!this.dataProvider.sidebarToggle
    }
  }
}
