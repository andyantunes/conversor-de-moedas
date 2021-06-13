import { Directive, HostListener, ElementRef } from '@angular/core';
import {} from '@angular/forms';

@Directive({
  selector: '[numero]',
})
export class NumeroDirective {
  constructor() {}

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   *
   * @param $event any
   */
  @HostListener('keyup', ['$event']) onKeyUp($event: any) {
    let valor = $event.target.value;
    const posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    // this.onChange(valor);
  }
}
