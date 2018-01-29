import {Component, ComponentFactoryResolver, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ColumnConfig, FormConstructorService, SetConfig} from '../../../services/form-constructor.service';
import {ElementType} from '../../../enums/element-type.enum';
import {CzColumnComponent} from '../cz-column/cz-column.component';

@Component({
  selector: 'app-cz-set',
  templateUrl: './cz-set.component.html',
  styleUrls: ['./cz-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzSetComponent implements OnInit, OnDestroy {
  @ViewChild('columnContainer', {read: ViewContainerRef}) container;
  @Input() ref: any;
  @Input() config: SetConfig;
  @Input() index: number;
  @Output() setDeletedEvent = new EventEmitter<number>();
  private factory;

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
    (<CzColumnComponent>componentRef.instance).config = columnConfig;
  }

  changeSelectedElement() {
    this.formConstructorService.currentElementChanged$.next(
      {'type': ElementType.SET, 'config': this.config, 'componentRef': this.ref}
    );
  }

  ngOnDestroy(): void {
    this.setDeletedEvent.emit(this.index);
  }

}
