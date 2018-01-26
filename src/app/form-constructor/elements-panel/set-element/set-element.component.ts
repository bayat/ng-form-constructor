import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ElementType} from '../../../enums/element-type.enum';
import {SetConfig} from '../../../services/form-constructor.service';

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
    const config = new SetConfig();
    for (let i = 0; i < this.columns; i++) {
      config.columns.push({fields: []});
    }
    e.dataTransfer.setData('config', JSON.stringify(config));
  }

}
