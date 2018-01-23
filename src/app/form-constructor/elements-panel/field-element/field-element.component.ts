import {Component, Input, OnInit} from '@angular/core';
import {FieldConfig} from '../../../services/form-constructor.service';
import {ElementType} from '../../../enums/element-type.enum';

@Component({
  selector: 'app-field-element',
  templateUrl: './field-element.component.html',
  styleUrls: ['./field-element.component.css']
})
export class FieldElementComponent implements OnInit {
  @Input() config: FieldConfig;

  constructor() {
  }

  ngOnInit() {
  }

  drag(e) {
    e.dataTransfer.setData('type', ElementType.FIELD);
    e.dataTransfer.setData('data', JSON.stringify(this.config));
  }
}
