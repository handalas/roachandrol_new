import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/interfaces/demo';
import { read, utils } from 'xlsx';
@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {

  demos:Demo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.readFile();
  }

  async readFile(){

    const f = await (await fetch("../../../../../assets/docs/demos.xlsx")).arrayBuffer();
    const wb = read(f);
    const data = utils.sheet_to_json<Demo>(wb.Sheets[wb.SheetNames[0]]);
    this.demos = [];

    data.forEach( partida =>{
      this.demos.push(partida);
    })

  }

  reload(){
    this.readFile();
  }

}
