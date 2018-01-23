import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FieldConfig, FormConstructorService} from '../../services/form-constructor.service';

@Component({
  selector: 'app-elements-panel',
  templateUrl: './elements-panel.component.html',
  styleUrls: ['./elements-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ElementsPanelComponent implements OnInit {

  private fields: FieldConfig[];

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
    this.getFields();
  }

  getFields() {
    this.fields = this.formConstructorService.getFields();
  }


}
