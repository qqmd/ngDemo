import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fish-font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.css']
})
export class FontResizerComponent implements OnInit {
  @Input() size:number | String;
  @Output() sizeChange =new EventEmitter<number>();  
  constructor() { }

  ngOnInit() {
  }
  dec(){
    this.resize(-1);
  }
  inc(){
    this.resize(+1);
  }
  resize(delta: number){
    this.size = Math.min(40, Math.max(8, +this.size+ delta) )
    this.sizeChange.emit(this.size)   //这里是传出来的
  }
}
