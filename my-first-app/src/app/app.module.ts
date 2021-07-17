import { MeuFormComponent } from './meu-form/meu-form.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    MeuFormComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
  ],
  imports: [BrowserModule, FormsModule, CursosModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
