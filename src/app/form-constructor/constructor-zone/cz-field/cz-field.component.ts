import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CzComponent} from '../cz-component';
import {FormConstructorService} from '../../../services/form-constructor.service';

@Component({
  selector: 'app-cz-field',
  templateUrl: './cz-field.component.html',
  styleUrls: ['./cz-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CzFieldComponent implements OnInit, CzComponent {
  data: any;

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
  }

  drag(e) {
    console.info(e, 'field drag event');
  }

  clickOnField() {
    this.formConstructorService.currentElementChanged$.next(this.data);
  }

}
