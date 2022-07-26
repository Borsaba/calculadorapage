import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcular'
})
export class CalcularPipe implements PipeTransform {

  transform(value: number, multiplicador: number): unknown {
    return value * multiplicador;
  }

}
