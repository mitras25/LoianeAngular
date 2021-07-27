import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.css']
})
export class DiretivaCustomizadaComponent implements OnInit {
  
  mostrarCurso: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
  onMostrar(){
    this.mostrarCurso = !this.mostrarCurso
  }

}
