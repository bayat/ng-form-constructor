import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ElementType} from '../../../enums/element-type.enum';
import {CzFieldComponent} from '../cz-field/cz-field.component';
import {ColumnConfig, FieldConfig} from '../../../services/form-constructor.service';

@Component({
  selector: 'app-cz-column',
  templateUrl: './cz-column.component.html',
  styleUrls: ['./cz-column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzColumnComponent implements OnInit {
  @ViewChild('fieldContainer', {read: ViewContainerRef}) container;
  @Input() config: ColumnConfig;
  private factory;
  private fieldIndex = 0;

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
    (<CzFieldComponent>componentRef.instance).config = fieldConfig;
    (<CzFieldComponent>componentRef.instance).ref = componentRef;
    (<CzFieldComponent>componentRef.instance).index = this.fieldIndex++;
    (<CzFieldComponent>componentRef.instance).fieldDeletedEvent.subscribe(index => this.deleteField(index));
  }

  deleteField(fieldIndex) {
    this.config.fields.splice(fieldIndex, 1);
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
