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
      this.config = data.config;
      this.configType = data.type;
      this.componentRef = data.componentRef;
    });
  }

  deleteComponent() {
    this.componentRef.destroy();
    this.clear();
  }

  clear() {
    this.config = null;
    this.configType = null;
    this.componentRef = null;
  }

}
