import {Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {DropZoneDirective} from '../drop-zone.directive';
import {FormConstructorService} from '../../services/form-constructor.service';
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
  @Output() onClicked = new EventEmitter<any>();
  @ViewChild(DropZoneDirective) dropZone: DropZoneDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  drop(e) {
    if (e.target.className.indexOf('cz-content') === -1) {
      return;
    }
    e.preventDefault();
    const dataTransfer = e.dataTransfer;
    const type = dataTransfer.getData('type');
    const data = JSON.parse(dataTransfer.getData('data'));

    if (type == ElementType.SET) {
      const viewContainerRef = this.dropZone.viewContainerRef;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CzSetComponent);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<CzComponent>componentRef.instance).data = data;
    }
  }

}
