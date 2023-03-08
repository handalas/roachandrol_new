import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol';
import { read, utils } from 'xlsx';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  rol:Rol[] = [];

  //prueba excell

  constructor() { }

  ngOnInit(): void {
    this.readFile();
  }

  async readFile(){

    const f = await (await fetch("../../../../../assets/docs/rol.xlsx")).arrayBuffer();
    const wb = read(f);
    const data = utils.sheet_to_json<Rol>(wb.Sheets[wb.SheetNames[0]]);
    this.rol = [];

    data.forEach( partida =>{
      if(partida.tematica === 'fantasia'){
        partida.tematica = 'dungeon-solid.svg';
      }else if(partida.tematica === 'mitos'){
        partida.tematica = 'cthulu.png';
      }
      this.rol.push(partida);
    })

  }

  reload(){
    this.readFile();
  }


}
