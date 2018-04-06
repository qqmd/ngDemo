import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fish-value-binding',
  templateUrl: './value-binding.component.html',
  styleUrls: ['./value-binding.component.css']
})
export class ValueBindingComponent implements OnInit {
  public imgSrc:String="../assets/image/1.png"
  constructor() { }

  ngOnInit() {
  }
  public changeSrc() {
    console.log(Math.ceil((Math.random()*1000000000)%2));
    if(Math.ceil((Math.random()*1000000000)%2)===2) {
      this.imgSrc="../assets/image/2.jpg"
    }
    else{
      this.imgSrc="../assets/image/1.png"
    }
  }
}
