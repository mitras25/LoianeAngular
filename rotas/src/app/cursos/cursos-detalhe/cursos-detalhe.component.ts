import { CursosService } from '../cursos.service';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.css']
})
export class CursosDetalheComponent implements OnInit {
  id!: number;
  inscricao!: Subscription;
  curso: any
  
  
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
   this.inscricao = this.route.params.subscribe((params:any)=>{
      this.id = params["id"]
      this.curso = this.cursosService.getCurso(this.id)
      if(this.curso == null){
        this.router.navigate(['/naoEncontrado'])
      }

    })


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.inscricao) this.inscricao.unsubscribe()
  }
}
