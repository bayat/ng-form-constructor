import {Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DropZoneDirective} from '../drop-zone.directive';
import {FormConstructorService} from '../../services/form-constructor.service';
import {CzComponent} from './cz-component';

@Component({
  selector: 'app-constructor-zone',
  templateUrl: './constructor-zone.component.html',
  styleUrls: ['./constructor-zone.component.css']
})
export class ConstructorZoneComponent implements OnInit {
  @Output() onClicked = new EventEmitter<any>();
  @ViewChild(DropZoneDirective) dropZone: DropZoneDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
  }

  drop(e) {
    e.preventDefault();
    console.info(e, 'dropEvent');
    const dataTransfer = e.dataTransfer;
    const type = dataTransfer.getData('type');
    const data = JSON.parse(dataTransfer.getData('data'));

    const viewContainerRef = this.dropZone.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.formConstructorService.getComponentByType(type));
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CzComponent>componentRef.instance).data = data;
  }

}
