import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {FormConfig, SetConfig} from '../../services/form-constructor.service';
import {CzComponent} from './cz-component';
import {ElementType} from '../../enums/element-type.enum';
import {CzSetComponent} from './cz-set/cz-set.component';

@Component({
  selector: 'app-constructor-zone',
  templateUrl: './constructor-zone.component.html',
  styleUrls: ['./constructor-zone.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConstructorZoneComponent implements OnInit {
  @Input() formConfig: FormConfig;
  @ViewChild('setContainer', {read: ViewContainerRef}) container;
  private factory;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.factory = this.resolver.resolveComponentFactory(CzSetComponent);
    this.initForm();
  }

  initForm() {
    this.formConfig.sets.forEach(set => {
      this.createSet(set);
    });
  }

  drop(e) {
    if (e.target.className.indexOf('cz-content') === -1) {
      return;
    }
    e.preventDefault();
    const dataTransfer = e.dataTransfer;
    const type = dataTransfer.getData('type');
    const config = JSON.parse(dataTransfer.getData('config'));

    if (type == ElementType.SET) {
      this.createSet(config);
    }
  }

  createSet(setConfig: SetConfig) {
    const componentRef = this.container.createComponent(this.factory);
    (<CzComponent>componentRef.instance).config = setConfig;
    (<CzComponent>componentRef.instance).ref = componentRef;
  }

}
