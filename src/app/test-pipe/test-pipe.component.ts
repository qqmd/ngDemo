import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fish-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {
  public date1:any=new Date();
  constructor() { }

  ngOnInit() {
  }
  public Date(){
    setInterval(()=>{
      this.date1=new Date();
    },1000)
  }
}
