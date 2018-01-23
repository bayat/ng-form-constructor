import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-prop-editor',
  templateUrl: './prop-editor.component.html',
  styleUrls: ['./prop-editor.component.css']
})
export class PropEditorComponent implements OnInit {
  private element;

  constructor() {
  }

  ngOnInit() {
  }

  setElement(elem) {
    this.element = elem;
  }

}
