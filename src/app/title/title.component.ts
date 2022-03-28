import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {


  @Input() public title: string = "Bem vindo teste";

  constructor() { }
  ngOnDestroy(): void {
    console.log("componente destruido");
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    console.log("foi alterado com sucesso")
  }

}
