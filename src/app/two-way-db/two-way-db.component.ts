import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDbComponent {

  firstName:string="John";
  // changeName(){
  //   this.firstName="Sam";
  // }
  // fNameChange(e:any){
  //   if(e.target!=null){
  //     this.firstName=e.target.value;
  //   }
  // }

mobileNumber:string="";
save()
{
  console.log("Name:" + this.firstName);
  console.log("Mobile number:" + this.mobileNumber);
}

}
