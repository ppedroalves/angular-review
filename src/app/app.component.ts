import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf = destruir></app-title>
  <br>
  <button (click) = "destruirComponente()">Destruir</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public destruirComponente() {
    this.destruir = false;
  }

}
