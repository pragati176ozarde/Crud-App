import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent {
  orderStatus:string="pending";
  updateStatus(status:string){
    this.orderStatus=status;

  }

}
