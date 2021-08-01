import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = []
  pagina!: number 
  inscricao: Subscription = new Subscription; 

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
    this.inscricao = this.route.queryParams.subscribe((queryParams)=>{
      this.pagina = queryParams['pagina']
    }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe()
  }

  proximaPagina(){
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}})
  }

}
