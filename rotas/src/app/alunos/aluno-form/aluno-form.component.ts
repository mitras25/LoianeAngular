import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  id!: number
  aluno: any
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.inscricao = this.route.params.subscribe((params:any)=>{
      this.id = params["id"]
      this.aluno = this.alunosService.getAluno(this.id)
      if(this.aluno == null){
        this.aluno = {}
      }

    })

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.inscricao) this.inscricao.unsubscribe()
  }

}
