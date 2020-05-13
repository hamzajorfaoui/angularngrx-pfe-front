import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impaire'
})
export class ImpairePipe implements PipeTransform {

  transform(Objects:any[]): any[] {
    return Objects.filter(val=>{
      return val.number%2 != 0;
    })
  }

}
