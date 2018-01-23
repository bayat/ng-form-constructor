import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FormConstructorComponent} from './form-constructor/form-constructor.component';
import {PropEditorComponent} from './form-constructor/prop-editor/prop-editor.component';
import {ConstructorZoneComponent} from './form-constructor/constructor-zone/constructor-zone.component';
import {ElementsPanelComponent} from './form-constructor/elements-panel/elements-panel.component';
import {FieldElementComponent} from './form-constructor/elements-panel/field-element/field-element.component';
import {FormConstructorService} from './services/form-constructor.service';
import { SetElementComponent } from './form-constructor/elements-panel/set-element/set-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConstructorComponent,
    PropEditorComponent,
    ConstructorZoneComponent,
    ElementsPanelComponent,
    FieldElementComponent,
    SetElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FormConstructorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
