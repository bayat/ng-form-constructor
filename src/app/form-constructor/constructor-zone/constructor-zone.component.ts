import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-constructor-zone',
  templateUrl: './constructor-zone.component.html',
  styleUrls: ['./constructor-zone.component.css']
})
export class ConstructorZoneComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  drop(e) {
    e.preventDefault();
    console.info(e, 'dropEvent');
  }

}
