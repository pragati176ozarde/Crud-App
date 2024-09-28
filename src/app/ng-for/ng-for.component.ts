import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  ids:any={
    "Pragati":101,
    "Radhika":102,
    "Mohini":103,
    "Nilam":104,
    "Swati":105
  };
  idList:number[]=[];
  nameList:string[]=[];
  selectedId:any=[];
  selectedName:string=" ";
  onIdChange(event:any){
    this.nameList=this.ids[this.selectedId];

  }
}

// Object.keys(this.ids); 



  // states: any = {
  //   "Maharashtra": ["Mumbai", "Pune", "Nashik"],
  //   "Rajasthan": ["Jaipur"],
  //   "Madhyapradesh": ["Indore"]
  // };

  // statesList: string[] = Object.keys(this.states);
  // districtsList: string[] = [];
  // selectedState: string = '';
  // selectedDistrict: string = '';

  // onStateChange(event: any) {
  //   this.districtsList = this.states[this.selectedState];
  // }


// }
// interface Employee{
//   name:string;
// }



// id:number;
//   name:string;
//   items: { id: number, name: string }[] = [];
//   selectedItem: { id: number, name: string };

//   addItem() {
//     this.items.push({ id: this.id, name: this.name });
//     this.id = null;
//     this.name = '';
//   }

//   onSelect(items) {
//     this.selectedItem = items;
//     console.log('Selected Item:', this.selectedItem);
//   }
