import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  constructor() { 
    this.log("constructor")
  }

  ngOnChange(){
this.log('ngOnChange')
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngDoCheck(){
    this.log('mgDoCheck')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook)
  }


}
