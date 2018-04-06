import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fish-template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})
export class TemplateInterpolationComponent implements OnInit {
  public title:string = "这是我的面板"
  constructor() {
    // this.getVal();   
  }
  ngOnInit() {
  }
  public getVal():number{
    let i=10;
    i++;
    return i;
  }
}
