import { Directive } from '@angular/core';

@Directive({
  selector: '[appDataProvider]'
})
export class DataProviderDirective {
  public sidebarToggle:boolean = false;
  constructor() { }

}
