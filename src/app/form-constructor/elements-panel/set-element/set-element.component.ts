import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ElementType} from '../../../enums/element-type.enum';

@Component({
  selector: 'app-set-element',
  templateUrl: './set-element.component.html',
  styleUrls: ['./set-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SetElementComponent implements OnInit {
  @Input() columns;
  @Input() title;

  constructor() {
  }

  ngOnInit() {
  }

  drag(e) {
    e.dataTransfer.setData('type', ElementType.SET);
    e.dataTransfer.setData('data', JSON.stringify({'columns': this.columns}));
  }

}
