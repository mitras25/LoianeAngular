import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosNaoencontradoComponent } from './cursos-naoencontrado/cursos-naoencontrado.component';
import { AuthGuard } from '../guards/auth-guard';

const cursosRoutes: Routes = [
  {path: 'cursos', component: CursosComponent, canActivate: [AuthGuard]},
  {path: 'curso/:id', component: CursosDetalheComponent, canActivate: [AuthGuard]},
  {path: 'naoEncontrado', component: CursosNaoencontradoComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
