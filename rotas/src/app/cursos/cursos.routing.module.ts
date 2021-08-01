import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosNaoencontradoComponent } from './cursos-naoencontrado/cursos-naoencontrado.component';

const cursosRoutes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursosDetalheComponent},
  {path: 'naoEncontrado', component: CursosNaoencontradoComponent},


];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
