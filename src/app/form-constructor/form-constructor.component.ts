import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PropEditorComponent} from './prop-editor/prop-editor.component';
import {FormConfig, FormConstructorService} from '../services/form-constructor.service';

@Component({
  selector: 'app-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormConstructorComponent implements OnInit {
  @ViewChild(PropEditorComponent) editor: PropEditorComponent;

  private formConfig: FormConfig;
  private formConfigReady = false;

  constructor(private formConstructorService: FormConstructorService) {
  }

  ngOnInit() {
    this.formConfig = this.formConstructorService.getFormConfig();
    this.formConfigReady = true;
  }

}
