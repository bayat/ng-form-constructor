import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ElementType} from '../../../enums/element-type.enum';
import {CzFieldComponent} from '../cz-field/cz-field.component';
import {CzComponent} from '../cz-component';
import {ColumnConfig, FieldConfig} from '../../../services/form-constructor.service';

@Component({
  selector: 'app-cz-column',
  templateUrl: './cz-column.component.html',
  styleUrls: ['./cz-column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzColumnComponent implements OnInit, CzComponent {
  @ViewChild('fieldContainer', {read: ViewContainerRef}) container;
  ref: any;
  factory;
  config: ColumnConfig;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.factory = this.resolver.resolveComponentFactory(CzFieldComponent);
    this.initFields();
  }

  initFields() {
    this.config.fields.forEach(field => {
      this.createField(field);
    });
  }

  createField(fieldConfig: FieldConfig) {
    const componentRef = this.container.createComponent(this.factory);
    (<CzComponent>componentRef.instance).config = fieldConfig;
    (<CzComponent>componentRef.instance).ref = componentRef;
  }

  drop(e) {
    e.preventDefault();
    const dataTransfer = e.dataTransfer;
    const type = dataTransfer.getData('type');
    const config = JSON.parse(dataTransfer.getData('config'));

    if (type == ElementType.FIELD) {
      this.createField(config);
      this.config.fields.push(config);
    }
    e.stopPropagation();
  }

}
