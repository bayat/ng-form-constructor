import {Injectable} from '@angular/core';
import {ElementType} from '../enums/element-type.enum';
import {CzFieldComponent} from '../form-constructor/constructor-zone/cz-field/cz-field.component';
import {CzSetComponent} from '../form-constructor/constructor-zone/cz-set/cz-set.component';

export class FieldConfig {
  name: string;
  type: string;
  label: string;
  options: any;
}

@Injectable()
export class FormConstructorService {

  constructor() {
  }

  getFields(): FieldConfig[] {
    return [
      {name: 'orderNum', type: 'text', label: '№ приказа', options: ''},
      {name: 'sendEmail', type: 'boolean', label: 'Отправить email', options: ''},
      {name: 'assignees', type: 'person', label: 'Исполнители', options: ''},
      {name: 'responsible', type: 'responsible', label: 'Ответственный', options: ''},
      {name: 'dueDate', type: 'date', label: 'Выполнить до', options: ''}
    ];
  }

  getComponentByType(type: ElementType) {
    if (type == ElementType.FIELD) {
      return CzFieldComponent;
    } else {
      return CzSetComponent;
    }
  }

}
