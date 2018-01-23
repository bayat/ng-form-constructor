import {Component, OnInit} from '@angular/core';
import {FormConstructorService} from '../../services/form-constructor.service';

@Component({
  selector: 'app-prop-editor',
  templateUrl: './prop-editor.component.html',
  styleUrls: ['./prop-editor.component.css']
})
export class PropEditorComponent implements OnInit {
  private element;

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
    this.formConstructorService.currentElementChanged$.subscribe(data => this.setElement(data));
  }

  setElement(elem) {
    this.element = elem;
  }

}
