import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  nome: string = 'Roberto';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';
  valorBlur: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'angular';
  valorInicial: number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}

  botaoClicado() {
    alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  salvarBlur(valorBlur: string) {
    this.valorBlur = valorBlur;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
