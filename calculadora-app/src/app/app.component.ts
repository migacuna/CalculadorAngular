import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion Calculadora-app Angular';

  resultadoPadre; number;

  // tslint:disable-next-line: typedef
  onResultado(resultado: number){
    this.resultadoPadre = resultado;
  }

}
