import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";

@Injectable({ providedIn: 'root' })
export class AluoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosservice: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    let id = route.params['id']
    return this.alunosservice.getAluno(id)
  }
}