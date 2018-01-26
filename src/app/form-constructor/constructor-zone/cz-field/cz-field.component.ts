import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {CzComponent} from '../cz-component';
import {FieldConfig, FormConstructorService} from '../../../services/form-constructor.service';
import {ElementType} from '../../../enums/element-type.enum';

@Component({
  selector: 'app-cz-field',
  templateUrl: './cz-field.component.html',
  styleUrls: ['./cz-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzFieldComponent implements OnInit, OnDestroy, CzComponent {
  ref: any;
  @Input() config: FieldConfig;

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
    console.log('fieldComponent destroy');
  }

}
