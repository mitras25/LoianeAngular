import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursosDetalheComponent } from './cursos/cursos-detalhe/cursos-detalhe.component';
//import { CursosNaoencontradoComponent } from './cursos/cursos-naoencontrado/cursos-naoencontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
   // CursosComponent,
   // CursosDetalheComponent,
   // CursosNaoencontradoComponent,
   
    
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
