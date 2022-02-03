import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redutor'
})
export class RedutorPipe implements PipeTransform {

  transform(value: string, size: number = 50): unknown {
    if ( typeof value == 'string' && value.length > size )
      return value.slice(0, size) + '...'
    return value
  }

}
