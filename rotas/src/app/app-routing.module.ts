import { AuthGuard } from './guards/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursosDetalheComponent } from './cursos/cursos-detalhe/cursos-detalhe.component';
//mport { CursosNaoencontradoComponent } from './cursos/cursos-naoencontrado/cursos-naoencontrado.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent},
  
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursosDetalheComponent},
  //{path: 'naoEncontrado', component: CursosNaoencontradoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
