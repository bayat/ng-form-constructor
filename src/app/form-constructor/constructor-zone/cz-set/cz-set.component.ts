import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {CzComponent} from '../cz-component';
import {ColumnConfig, FormConstructorService, SetConfig} from '../../../services/form-constructor.service';
import {ElementType} from '../../../enums/element-type.enum';
import {CzColumnComponent} from '../cz-column/cz-column.component';

@Component({
  selector: 'app-cz-set',
  templateUrl: './cz-set.component.html',
  styleUrls: ['./cz-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzSetComponent implements OnInit, CzComponent, OnDestroy {
  @ViewChild('columnContainer', {read: ViewContainerRef}) container;
  ref: any;
  config: SetConfig;
  factory;

  constructor(private formConstructorService: FormConstructorService,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.factory = this.resolver.resolveComponentFactory(CzColumnComponent);
    this.initColumns();
  }

  initColumns() {
    this.config.columns.forEach(column => {
      this.createColumn(column);
    });
  }

  createColumn(columnConfig: ColumnConfig) {
    const componentRef = this.container.createComponent(this.factory);
    (<CzComponent>componentRef.instance).config = columnConfig;
    (<CzComponent>componentRef.instance).ref = componentRef;
  }

  changeSelectedElement() {
    this.formConstructorService.currentElementChanged$.next(
      {'type': ElementType.SET, 'config': this.config, 'componentRef': this.ref}
    );
  }

  ngOnDestroy(): void {
    console.log('SetComponent destroy');
  }

}
