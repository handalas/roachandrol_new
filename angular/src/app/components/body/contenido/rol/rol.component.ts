import { Component, OnInit } from '@angular/core';

interface Rol {
	name: string;
  sistema:string;
	realiza: string;
	tematica: string;
	descripcion: string;
}

const ROL: Rol[] = [
	{
		name: 'Fragmentos extraña oscuridad',
    sistema: 'Resurgir del dragón',
		realiza: 'Handalas',
	  tematica: 'dungeon-solid.svg',
	  descripcion: 'Vais a meter piños a golems'
	},
  {
		name: 'La verdad de los pulpos',
    sistema: 'Llamada de Cthulhu',
		realiza: 'Serkaz',
	  tematica: 'cthulu.png',
	  descripcion: 'La vais a flipar con los pulpos'
	}
];

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  rol = ROL;

  constructor() { }

  ngOnInit(): void {
  }

}
