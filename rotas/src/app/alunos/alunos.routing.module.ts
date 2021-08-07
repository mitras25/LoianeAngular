import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AuthGuard } from '../guards/auth-guard';
import { AluoDetalheResolver } from './guards/aluno-detalhe.resolve';

const alunosRoutes: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent,
          resolve: {alunoResolve: AluoDetalheResolver} },
      { path: ':id/editar', component: AlunoFormComponent },
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
