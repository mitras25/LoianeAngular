import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    nome:'',
    senha: ''
  }


  
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
  }
  
  fazerLogin(){
    this.authService.fazerLogin(this.usuario)
  }
}
