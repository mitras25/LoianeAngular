
import { Injectable } from '@angular/core';
import { LogServiceService } from '../shared/log-service.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos = ["Angular", "Java", "Docker"]

  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos 
  }

  constructor(private logService: LogServiceService) {
    console.log("CursosService")
   }

  addCurso(curso: string){
    this.logService.consoleLog(`Criando curso novo ${curso}`)
     this.cursos.push(curso)
  }
}
