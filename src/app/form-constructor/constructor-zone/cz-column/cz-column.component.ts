import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ElementType} from '../../../enums/element-type.enum';
import {DropZoneDirective} from '../../drop-zone.directive';
import {CzFieldComponent} from '../cz-field/cz-field.component';
import {CzComponent} from '../cz-component';

@Component({
  selector: 'app-cz-column',
  templateUrl: './cz-column.component.html',
  styleUrls: ['./cz-column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzColumnComponent implements OnInit {
  @ViewChild(DropZoneDirective) dropZone: DropZoneDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  drop(e) {
    e.preventDefault();
    const dataTransfer = e.dataTransfer;
    const type = dataTransfer.getData('type');
    const data = JSON.parse(dataTransfer.getData('data'));

    if (type == ElementType.FIELD) {
      const viewContainerRef = this.dropZone.viewContainerRef;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CzFieldComponent);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<CzComponent>componentRef.instance).data = data;
      (<CzComponent>componentRef.instance).ref = componentRef;
    }
    e.stopPropagation();
  }

}
