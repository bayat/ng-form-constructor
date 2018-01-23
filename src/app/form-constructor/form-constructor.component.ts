import {Component, OnInit, ViewChild} from '@angular/core';
import {PropEditorComponent} from './prop-editor/prop-editor.component';

@Component({
  selector: 'app-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.css']
})
export class FormConstructorComponent implements OnInit {
  @ViewChild(PropEditorComponent) editor: PropEditorComponent;

  constructor() {
  }

  ngOnInit() {
  }

  setCurrentElement(event) {
    this.editor.setElement(event);
  }

}
