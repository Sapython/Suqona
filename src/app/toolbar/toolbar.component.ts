import { Component, OnInit } from '@angular/core';
import { DataProviderDirective } from '../directives/data-provider.directive';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  
  constructor(public dataProvider:DataProviderDirective) { }
  sidebarToggle:boolean=false;
  ngOnInit() {}
  toggleSidebar(){
    console.log("Control ",this.dataProvider.sidebarToggle);
    if (!this.dataProvider.sidebarToggle){
      this.dataProvider.sidebarToggle=!this.dataProvider.sidebarToggle
    } else {
      this.dataProvider.sidebarToggle=!this.dataProvider.sidebarToggle
    }
  }
}
