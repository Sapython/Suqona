import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  type: string;
  constructor() { }

  ngOnInit() {
    this.type = 'cars';
  }
  counter(num){
    let data = [1,2,3,4,5,6,7,8]
    return data
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
