
import { Component, OnInit } from '@angular/core';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {
  faCoffee = faCoffee
  faStar = faStar

  constructor() { }

  ngOnInit(): void {
  }

}
