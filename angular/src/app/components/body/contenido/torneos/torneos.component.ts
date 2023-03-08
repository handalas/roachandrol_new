import { Component, OnInit } from '@angular/core';

interface Torneo {
	name: string;
  sistema:string;
	realiza: string;
	tematica: string;
	descripcion: string;
}

const TORNEOS: Torneo[] = [
	{
		name: 'Warcry tu puta madre',
    sistema: 'Warcry',
		realiza: 'Handalas',
	  tematica: 'galactic-senate.svg',
	  descripcion: 'Vais a mataros unos a otros con pistolitas grises'
	},
  {
		name: 'Blood bowl hora de las tortas',
    sistema: 'Blood Bowl 7',
		realiza: 'Serkaz',
	  tematica: 'football-ball-solid.svg',
	  descripcion: '14 tios dandose hostias, a veces hay una pelotita por ahi'
	}
];

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  torneos = TORNEOS;

  constructor() { }

  ngOnInit(): void {
  }

}
