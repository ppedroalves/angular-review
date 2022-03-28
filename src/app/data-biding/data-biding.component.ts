import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Dener";
  public idade: number = 29;

  public position: { x: number, y: number } = { x: 0, y: 0 }

  public checkedDisabled: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY

  }

}
