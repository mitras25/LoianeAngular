import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id!: number
  aluno: any
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    // this.inscricao = this.route.params.subscribe((params:any)=>{
    //   this.id = params["id"]
    //   this.aluno = this.alunosService.getAluno(this.id)
    //   if(this.aluno == null){
    //     this.router.navigate(['/naoEncontrado'])
    //   }

    // })

    this.inscricao = this.route.data.subscribe(
      (info)=>{
        this.aluno = info.alunoResolve
      }
      
    )

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.inscricao) this.inscricao.unsubscribe()
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

}
