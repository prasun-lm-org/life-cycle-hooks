import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck{

  //isChild = false;
  isChild = true;
  channelName = "";

  constructor() {
    console.log("Parent Constructor is called.");
  }

  ngOnInit(): void {
    console.log("Parent OnInit is called.");
  }

  toggleChild(){
    this.isChild = !this.isChild;
  }
    
  ngOnChanges(): void{
    console.log("Parent OnChanges is called.");
  }

  ngDoCheck(): void{
    console.log("Parent DoCheck is called.");
  }
}
