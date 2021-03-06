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
import {SetElementComponent} from './form-constructor/elements-panel/set-element/set-element.component';
import {FormConstructorService} from './services/form-constructor.service';
import {CzSetComponent} from './form-constructor/constructor-zone/cz-set/cz-set.component';
import {CzFieldComponent} from './form-constructor/constructor-zone/cz-field/cz-field.component';
import { CzColumnComponent } from './form-constructor/constructor-zone/cz-column/cz-column.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConstructorComponent,
    PropEditorComponent,
    ConstructorZoneComponent,
    ElementsPanelComponent,
    FieldElementComponent,
    SetElementComponent,
    CzSetComponent,
    CzFieldComponent,
    CzColumnComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FormConstructorService],
  entryComponents: [CzSetComponent, CzColumnComponent, CzFieldComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
