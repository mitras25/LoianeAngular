import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;
  //eventEmitter, passar um evento pra frente
  @Output() mudouValor = new EventEmitter();

  //fazendo o casamento da variavel com a variavel local do campo input
  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }
  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
