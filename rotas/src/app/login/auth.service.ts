import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false
  mostrarMenuEmitter = new EventEmitter();

  constructor(private route: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '12345'){
      this.usuarioAutenticado = true
      this.mostrarMenuEmitter.emit(true)
      this.route.navigate(['/'])
    }else{
      this.usuarioAutenticado = false
      this.mostrarMenuEmitter.emit(false)
    }
  }
}
