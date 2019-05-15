import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
import _ from 'lodash';

@Pipe({
  name: 'mapSelectItem'
})
export class MapSelectItemPipe implements PipeTransform {
  transform(value: string, data: object): string {
    const type = _.get(data, 'type');

    switch (type) {
      case 'date':
        return value ? moment(value).format('L') : '';
      case 'combobox':
        const initialValue = _.get(data, 'initValue');
        const option = initialValue.find(item => item.id === value);
        return _.get(option, 'value');
      default:
        return value;
    }
  }
}

