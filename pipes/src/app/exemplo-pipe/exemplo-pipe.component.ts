import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipe',
  templateUrl: './exemplo-pipe.component.html',
  styleUrls: ['./exemplo-pipe.component.css']
})
export class ExemploPipeComponent implements OnInit {

  livro: any = {
    titulo: "Aprendendo Angular Com Type",
    rating: 4.5543,
    numeroPagina: 558,
    preco: 50.00,
    dataLancamento: new Date(2016, 5, 23),
    url: "http://livros.com.br"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
