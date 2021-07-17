import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  twoName: string = 'abc';

  people: any={
    name: 'maria',
    age: 22
  }

  constructor() { }

  ngOnInit(): void {
  }

}
