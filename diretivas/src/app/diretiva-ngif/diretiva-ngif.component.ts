import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular", "TypeScript"]

  mostrarCurso: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  onMostrar(){
    this.mostrarCurso = !this.mostrarCurso
  }

}
