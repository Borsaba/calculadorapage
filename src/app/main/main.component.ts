import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {



  num = 0;
  num2 = 0;
  num3 = 0;










  teste() {
    let button: any = document.querySelectorAll('.accordion__button')[0]
    let accordionContent = button.nextElementSibling;
    button.classList.toggle('accordion__button--active');


    if (button.classList.contains('accordion__button--active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }

  }



  show() {


    document.querySelectorAll('.accordion__button').forEach((button: any) => { //especificar tipo do elemento
      button.addEventListener('click', this.teste()) //precisei separar a funçao em duas, pois quando eu usava uma função anonima em event listener ela só executava com 2 clicks que funcionava incorretamente. um console.log ia executando segundo a razão de uma progressão aritmetica de 1. codigo abaixo
    })
  }

  partes: any = [];
  valor: number = 0



  Calcular() {
    this.partes = []
    let A = (<HTMLInputElement>document.getElementById("inppp"))

    while (this.valor > 1) {
      for (var i = 2; i <= this.valor; i++) {
        if (this.valor % i) continue;
        this.partes.push([this.valor + "/" + i]);
        this.valor = this.valor / i;
        break;
      }
    }
    this.partes.push([1]);


    A.innerHTML = this.partes.map(essenum => essenum + "\n")
    let b = A.innerHTML.replace(/,/g, "")
    A.innerHTML = b

  }


}















/*showw() {
document.querySelectorAll('.accordion__button').forEach((button: any) => {
    button.addEventListener('click', () => {

      let accordionContent = button.nextElementSibling;

      button.classList.toggle('accordion__button--active');


      if (button.classList.contains('accordion__button--active')) {
        accordionContent!.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent!.style.maxHeight = 0;
      }


    })
  })

}
*/

