import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos = ["Angular", "Java", "Docker"]

  getCursos(){
    return this.cursos 
  }

  constructor() { }

  addCurso(curso: string){
     this.cursos.push(curso)
  }
}
