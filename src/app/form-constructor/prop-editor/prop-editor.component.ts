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
  private componentRef: any;
  private elementTypeEnum = ElementType;

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
    this.formConstructorService.currentElementChanged$.subscribe(data => {
      this.setConfig(data.config);
      this.setConfigType(data.type);
      this.setComponentRef(data.componentRef);
    });
  }

  setConfig(config) {
    this.config = config;
  }

  setConfigType(type: ElementType) {
    this.configType = type;
  }

  setComponentRef(componentRef: any) {
    this.componentRef = componentRef;
  }

  deleteComponent() {
    this.componentRef.destroy();
    this.clear();
  }

  clear() {
    this.setConfig(null);
    this.setConfigType(null);
    this.setComponentRef(null);
  }

}
