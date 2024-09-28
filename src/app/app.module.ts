import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TwoWayDbComponent } from './two-way-db/two-way-db.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalTotPriceComponent } from './cal-tot-price/cal-tot-price.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { InterpoProperBindingComponent } from './interpo-proper-binding/interpo-proper-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TwoWayDbComponent,
    CalculatorComponent,
    CalTotPriceComponent,
    DirectivePracticeComponent,
    StructuralDirectiveComponent,
    NgSwitchExampleComponent,
    NgForComponent,
    InterpoProperBindingComponent
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
