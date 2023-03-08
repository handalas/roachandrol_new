import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/interfaces/torneo';
import { read, utils } from 'xlsx';
@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  torneos:Torneo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.readFile();
  }

  async readFile(){

    const f = await (await fetch("../../../../../assets/docs/torneos.xlsx")).arrayBuffer();
    const wb = read(f);
    const data = utils.sheet_to_json<Torneo>(wb.Sheets[wb.SheetNames[0]]);
    this.torneos = [];

    data.forEach( partida =>{
      if(partida.tematica === 'senate'){
        partida.tematica = 'galactic-senate.svg';
      }
      this.torneos.push(partida);
    })

  }

  reload(){
    this.readFile();
  }
}
