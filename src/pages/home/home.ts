import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Propiedades de la case HomePage
  // Tipos primitivos: number, string, boolean, any, array
  num : number;
  mayorMenor : string = "...";
  numSecreto : number = this.numAleatorio(0, 10);


  constructor(public navCtrl: NavController) {

  }

  // Métodos
  // Función numAleatorio
  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
  }

  compruebaNumero() {
    if (this.num) {
      if(this.numSecreto < this.num) {
        this.mayorMenor = "menor de";
      }
      else if (this.numSecreto > this.num) {
        this.mayorMenor = "mayor de";
      }
      else {
        this.mayorMenor = "";
      }
    }
  }

  // Método Reinicia (para reiniciar el juego)
  reinicia() {
    this.num = null;
    this.mayorMenor = "...";
    this.numSecreto = this.numAleatorio(2, 10);
  }


}
