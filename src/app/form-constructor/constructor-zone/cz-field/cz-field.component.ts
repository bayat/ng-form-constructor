import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FieldConfig, FormConstructorService} from '../../../services/form-constructor.service';
import {ElementType} from '../../../enums/element-type.enum';

@Component({
  selector: 'app-cz-field',
  templateUrl: './cz-field.component.html',
  styleUrls: ['./cz-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzFieldComponent implements OnInit, OnDestroy {
  @Input() ref: any;
  @Input() config: FieldConfig;
  @Input() index: number;
  @Output() fieldDeletedEvent = new EventEmitter<number>();

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
  }

  drag(e) {
    console.info(e, 'field drag event');
  }

  changeSelectedElement(e) {
    this.formConstructorService.currentElementChanged$.next({'type': ElementType.FIELD, 'config': this.config, 'componentRef': this.ref});
    e.stopPropagation();
  }

  ngOnDestroy(): void {
    this.fieldDeletedEvent.emit(this.index);
  }

}
