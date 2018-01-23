import {Component, Input, OnInit} from '@angular/core';
import {CzComponent} from '../cz-component';

@Component({
  selector: 'app-cz-field',
  templateUrl: './cz-field.component.html',
  styleUrls: ['./cz-field.component.css']
})
export class CzFieldComponent implements OnInit, CzComponent {
  data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
