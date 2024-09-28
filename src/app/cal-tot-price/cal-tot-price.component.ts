import { Component } from '@angular/core';

@Component({
  selector: 'app-cal-tot-price',
  templateUrl: './cal-tot-price.component.html',
  styleUrls: ['./cal-tot-price.component.css']
})


export class CalTotPriceComponent {

  price:number=0;
  quantity:number=0;
  discount:number=0;
  totalprice:number=0;

  
  
  
  tot(){
   this.totalprice=(this.price*this.quantity)-this.discount;
}
name:string="Pragati";
mobileno:number=0;
  birthdate:number=0;
  age:number=0;



  calculateAge(){
    if (this.birthdate) {
      const birthDate = new Date(this.birthdate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    }
  }

productObj:Product=new Product();

    CalculateTotalPrice(){
    
          if(this.productObj.price1!=undefined && this.productObj.quantity1!=undefined) {
        
          
           this.productObj.totalPrice1=this.productObj.price1*this.productObj.quantity1;
        
         }}
          saveProduct(){
      console.log("Product" , this.productObj);
     }
  
        

  }

    class Product{
      productObj=new Product;
    price1:number|undefined;
    quantity1:number|undefined;
   totalPrice1:number|undefined;
 
    }






    
   



    
    



    
     
    
    
    
    
