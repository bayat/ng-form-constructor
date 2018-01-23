import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CzComponent} from '../cz-component';

@Component({
  selector: 'app-cz-set',
  templateUrl: './cz-set.component.html',
  styleUrls: ['./cz-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzSetComponent implements OnInit, CzComponent {
  data: any;

  constructor() {
  }

  ngOnInit() {
  }

  createRange() {
    console.info(this.data, 'setData');
    const items = [];
    for (let i = 0; i < this.data.columns; i++) {
      items.push(i);
    }
    return items;
  }

}
