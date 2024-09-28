import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  courses:string[]=["Angular Developer" , "Java Developer" , "DevOps" , "AWS" , "Full stack developer", "Salesforce"];
  products:Product[]=[
    {productName:"Laptop" , price:55000 , quantity:2},
      {productName:"TV" , price:20000 , quantity:2},
     {productName:"Mobile" , price:27000 , quantity:4},
      {productName:"Refrigerator" , price:25000 , quantity:2},
      {productName:"Tablet" , price:10000 , quantity:3}

    
  ];

  
}
interface Product{
  productName:string;
  price:number;
  quantity:number;



}
