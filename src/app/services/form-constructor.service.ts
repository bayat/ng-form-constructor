import {Injectable} from '@angular/core';

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

}
