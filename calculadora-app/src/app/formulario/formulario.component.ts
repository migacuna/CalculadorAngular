import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoSuma = new EventEmitter<number>();
  @Output() resultadoResta = new EventEmitter<number>();
  @Output() resultadoMultiplicar = new EventEmitter<number>();
  @Output() resultadoDividir = new EventEmitter<number>();

  operandoA: number;
  operandoB: number;
  constructor() { }

  ngOnInit(): void {
  }

  onSumar(): void{
    // tslint:disable-next-line: prefer-const
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }

  onRestar(): void{
    // tslint:disable-next-line: prefer-const
    let resultado = this.operandoA - this.operandoB;
    this.resultadoResta.emit(resultado);
  }

  onMultiplicar(): void{
    // tslint:disable-next-line: prefer-const
    let resultado = this.operandoA * this.operandoB;
    this.resultadoMultiplicar.emit(resultado);
  }

  onDividir(): void{
    // tslint:disable-next-line: prefer-const
    let resultado = this.operandoA / this.operandoB;
    this.resultadoDividir.emit(resultado);
  }
}
