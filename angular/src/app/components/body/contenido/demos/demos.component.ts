import { Component, OnInit } from '@angular/core';

interface Demo {
	name: string;
	realiza: string;
	tematica: string;
	descripcion: string;
}

const DEMO: Demo[] = [
	{
		name: 'Comer papa frita ',
		realiza: 'Handalas',
	  tematica: 'dice-d6-solid.svg',
	  descripcion: 'Juego de mesa de comer una papa frita'
	},
  {
		name: 'Danza del huevo Roach edition',
		realiza: 'Serkaz',
	  tematica: 'dice-d6-solid.svg',
	  descripcion: 'Lo mismo que el original pero da gracias si sales vivo'
	}
];

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {

  demos = DEMO;

  constructor() { }

  ngOnInit(): void {
  }

}
