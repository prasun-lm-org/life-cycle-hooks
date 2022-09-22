import { 
  Component, 
  OnDestroy, 
  OnInit, 
  OnChanges, 
  Input, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  ContentChild, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild
 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
  implements 
    OnInit, 
    OnDestroy, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{

  counter = 0;
  interval:any;

  @Input()
  channelName = "";

  //@ContentChild('projectedContent') projectedContent: any;
  @ContentChild('projectedContent', {static: true}) projectedContent: any; // default false
  //@ViewChild('childContent') childContent: any;
  @ViewChild('childContent', {static: true}) childContent: any; // default false

  constructor() { 
    console.log("Child Constructor is called.");
  }

  ngOnInit(): void {
    console.log("Child OnInit is called.");
    console.log("OnInit - " + this.projectedContent);
    console.log("OnInit - " + this.childContent);

    /*this.interval = setInterval(() => {
      this.counter += 1; 
      console.log(this.counter);
    }, 1000);*/
  }

  ngOnDestroy(): void {
    //clearInterval(this.interval); // prevent memory leak
    console.log("Child OnDestroy is called.");
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    console.log("Child OnChanges is called.");
    console.log("OnChanges - " + this.projectedContent);
    console.log("OnChanges - " + this.childContent);
  }

  ngDoCheck(): void{
    console.log("Child DoCheck is called.");
    console.log("DoCheck - " + this.projectedContent);
    console.log("DoCheck - " + this.childContent);
  }

  ngAfterContentInit(): void{
    console.log("Child AfterContentInit is called.");
    console.log("AfterContentInit - " + this.projectedContent);
    console.log("AfterContentInit - " + this.childContent);
  }

  ngAfterContentChecked(): void{
    console.log("Child AfterContentChecked is called.");
    console.log("AfterContentChecked - " + this.projectedContent);
    console.log("AfterContentChecked - " + this.childContent);
  }

  ngAfterViewInit(): void{
    console.log("Child AfterViewInit is called.");
    console.log("AfterViewInit - " + this.projectedContent);
    console.log("AfterViewInit - " + this.childContent);
  }

  ngAfterViewChecked(): void{
    console.log("Child AfterViewChecked is called.");
    console.log("AfterViewChecked - " + this.projectedContent);
    console.log("AfterViewChecked - " + this.childContent);
  }
}
