import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CzComponent} from '../cz-component';
import {FormConstructorService} from '../../../services/form-constructor.service';
import {ElementType} from '../../../enums/element-type.enum';

@Component({
  selector: 'app-cz-set',
  templateUrl: './cz-set.component.html',
  styleUrls: ['./cz-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzSetComponent implements OnInit, CzComponent {
  ref: any;
  data: any;

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
  }

  createRange() {
    const items = [];
    for (let i = 0; i < this.data.columns; i++) {
      items.push(i);
    }
    return items;
  }

  changeSelectedElement() {
    this.formConstructorService.currentElementChanged$.next(
      {'type': ElementType.SET, 'config': this.data, 'componentRef': this.ref}
    );
  }


}
