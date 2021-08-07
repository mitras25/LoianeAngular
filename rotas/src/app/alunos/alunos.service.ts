import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'José Maria ', email: 'aluno01@gmail.com' },
    { id: 2, nome: 'Ana Beatriz ', email: 'aluno02@gmail.com' },
    { id: 3, nome: 'Claudia Lima ', email: 'aluno03@gmail.com' },
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      if (id == this.alunos[i].id) {
        let aluno = this.alunos[i];
        return aluno;
      }
    }
    return this.alunos;
  }

  constructor() {}

 
}
