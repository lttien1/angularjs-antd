import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'convertUndefinedValue'
})
export class ConvertUndefinedValuePipe implements PipeTransform {
  transform(value: string): any {
    return _.isUndefined(value) ? '' : value;
  }
}
