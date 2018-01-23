import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-constructor-zone',
  templateUrl: './constructor-zone.component.html',
  styleUrls: ['./constructor-zone.component.css']
})
export class ConstructorZoneComponent implements OnInit {
  @Output() onClicked = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  drop(e) {
    e.preventDefault();
    console.info(e, 'dropEvent');
    const dataTransfer = e.dataTransfer;
    const type = dataTransfer.getData('type');
    const data = JSON.parse(dataTransfer.getData('data'));
  }

}
