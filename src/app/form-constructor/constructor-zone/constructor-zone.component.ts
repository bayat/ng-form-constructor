import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {FormConfig, SetConfig} from '../../services/form-constructor.service';
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
  private setIndex = 0;

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

  createSet(setConfig: SetConfig) {
    const componentRef = this.container.createComponent(this.factory);
    (<CzSetComponent>componentRef.instance).config = setConfig;
    (<CzSetComponent>componentRef.instance).ref = componentRef;
    (<CzSetComponent>componentRef.instance).index = this.setIndex++;
    (<CzSetComponent>componentRef.instance).setDeletedEvent.subscribe(index => this.deleteSet(index));
  }

  deleteSet(setIndex) {
    this.formConfig.sets.splice(setIndex, 1);
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
      this.formConfig.sets.push(config);
    }
  }

}
