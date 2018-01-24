import {Component, OnInit} from '@angular/core';
import {FormConstructorService} from '../../services/form-constructor.service';
import {ElementType} from '../../enums/element-type.enum';

@Component({
  selector: 'app-prop-editor',
  templateUrl: './prop-editor.component.html',
  styleUrls: ['./prop-editor.component.css']
})
export class PropEditorComponent implements OnInit {
  private config;
  private configType: ElementType;
  private elementTypeEnum = ElementType;

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
    this.formConstructorService.currentElementChanged$.subscribe(data => {
      this.setConfig(data.config);
      this.setConfigType(data.type);
    });
  }

  setConfig(config) {
    this.config = config;
  }

  setConfigType(type: ElementType) {
    this.configType = type;
  }

}
