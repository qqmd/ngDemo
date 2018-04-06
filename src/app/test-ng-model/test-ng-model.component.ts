import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fish-test-ng-model',
  templateUrl: './test-ng-model.component.html',
  styleUrls: ['./test-ng-model.component.css']
})
export class TestNgModelComponent implements OnInit {
  public changeVal:any={name:"名字"}
  constructor() { }

  ngOnInit() {
  }

}
