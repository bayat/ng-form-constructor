import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ElementType} from '../../../enums/element-type.enum';
import {CzFieldComponent} from '../cz-field/cz-field.component';
import {CzComponent} from '../cz-component';
import {ColumnConfig} from '../../../services/form-constructor.service';

@Component({
  selector: 'app-cz-column',
  templateUrl: './cz-column.component.html',
  styleUrls: ['./cz-column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzColumnComponent implements OnInit, CzComponent {
  @ViewChild('fieldContainer', {read: ViewContainerRef}) container;
  ref: any;
  config: ColumnConfig;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(CzFieldComponent);
    this.config.fields.forEach(field => {
      const componentRef = this.container.createComponent(factory);
      (<CzComponent>componentRef.instance).config = field;
      (<CzComponent>componentRef.instance).ref = componentRef;
    });
  }

  drop(e) {
    e.preventDefault();
    const dataTransfer = e.dataTransfer;
    const type = dataTransfer.getData('type');
    const config = JSON.parse(dataTransfer.getData('config'));

    if (type == ElementType.FIELD) {
      const factory = this.resolver.resolveComponentFactory(CzFieldComponent);
      const componentRef = this.container.createComponent(factory);
      (<CzComponent>componentRef.instance).config = config;
      (<CzComponent>componentRef.instance).ref = componentRef;
    }
    e.stopPropagation();
  }

}
