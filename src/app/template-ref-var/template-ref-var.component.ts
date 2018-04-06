import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fish-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sayHello(val:string):void{
    alert(val)
  }
}
