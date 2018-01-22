import {Component, Input, OnInit} from '@angular/core';
import {FieldConfig} from '../../../services/form-constructor.service';

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
    console.info(e, 'fieldElement drag event');
  }
}
