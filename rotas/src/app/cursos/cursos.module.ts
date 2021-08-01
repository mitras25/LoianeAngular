import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosNaoencontradoComponent } from './cursos-naoencontrado/cursos-naoencontrado.component';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent,
    CursosNaoencontradoComponent
  ],
  imports: [ 
    CommonModule,
    CursosRoutingModule
   ],
  exports: [],
  providers: [
    CursosService
  ],
})
export class CursosModule {}