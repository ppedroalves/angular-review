import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public nome: string = "Denver Nuggets"

  public list: Array<{ nome: string, idade: number }> = [{ nome: "Denver Nuggets", idade: 29 }, {
    nome: "Houstoun Rockets", idade: 30
  }, { nome: "Cleveland Cavaliers", idade: 31 }]


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  public onClickAdd() {
    this.list.push({ nome: "Phoenix Suns", idade: 45 })

  }

  public onClickLi(event: number) {
    this.list.splice(event, 1)
  }

}
