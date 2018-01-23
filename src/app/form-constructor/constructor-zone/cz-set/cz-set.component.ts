import {Component, OnInit} from '@angular/core';
import {CzComponent} from '../cz-component';

@Component({
  selector: 'app-cz-set',
  templateUrl: './cz-set.component.html',
  styleUrls: ['./cz-set.component.css']
})
export class CzSetComponent implements OnInit, CzComponent {
  data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
