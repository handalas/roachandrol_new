import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

 

  constructor() {
  
  }

  ngOnInit(): void {
  }

 

}
