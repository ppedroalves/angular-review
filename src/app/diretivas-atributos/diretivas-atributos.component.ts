import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  constructor() { }

  public valor: boolean = true

  public altura: string = "200px"

  public nome: string = "prtt165hz "

  public list: Array<{nome: string, idade: number, telefone: string}> = [{nome: "prtt165hz", idade: 29, telefone: "39988411956"}, {nome: "o brabo de bh", idade: 21, telefone: "349887541"}]

  public date: Date = new Date()

  ngOnInit(): void {

    setInterval(()=> {
      if(this.valor){
        this.valor = false
      }else{
        this.valor = true
      }


      if(this.altura == "200px"){
        this.altura = "50px"
      }else{
        this.altura = "200px"
      }


    } ,2000)


    

    
  }

  

}
