import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosNaoencontradoComponent } from './cursos-naoencontrado/cursos-naoencontrado.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursosDetalheComponent},
  {path: 'login', component: LoginComponent},
  {path: 'naoEncontrado', component: CursosNaoencontradoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
