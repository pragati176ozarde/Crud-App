import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent {
  age:number=18;
  isShow:boolean=false;
  displayMoreContent(){
    this.isShow=true;
  }
  removeContent(){
    this.isShow=false;
  }
   isLoggedIn:boolean=false;
  login(){
    this.isLoggedIn=true;

  }
  logout(){
this.isLoggedIn=false;
  }



  states: any = {
    "Maharashtra": ["Mumbai", "Pune", "Nashik"],
    "Rajasthan": ["Jaipur"],
    "Madhyapradesh": ["Indore"]
  };

  statesList: string[] = Object.keys(this.states);
  districtsList: string[] = [];
  selectedState: string = '';
  selectedDistrict: string = '';

  onStateChange(event: any) {
    this.districtsList = this.states[this.selectedState];
  }

}
