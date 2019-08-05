import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
//TODO find a way to return desired type, until then obsolete
export class ReversePipe implements PipeTransform {

  transform(value) {
      if (!value) return;

      return value.reverse();
    }
}
