import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class FormConfig {
  sets: SetConfig[] = [];
}

export class SetConfig {
  legend: string;
  columns: ColumnConfig[] = [];
}

export class ColumnConfig {
  fields: FieldConfig[] = [];
}

export class FieldConfig {
  name: string;
  type: string;
  label: string;
  options: any;
}

@Injectable()
export class FormConstructorService {
  currentElementChanged$ = new Subject<any>();

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
