import { Component } from '@angular/core';

@Component({
  selector: 'app-interpo-proper-binding',
  templateUrl: './interpo-proper-binding.component.html',
  styleUrls: ['./interpo-proper-binding.component.css']
})
export class InterpoProperBindingComponent {


  empObj:any={
  empId:101,
  empName:"Pragati" ,
  designation:"Angular Developer",
  isMarried:true

  }
  isDisable:boolean=false;
  link:string="https://www.google.com/chrome/next-steps.html?installdataindex=empty&statcb=1&defaultbrowser=0";

}
