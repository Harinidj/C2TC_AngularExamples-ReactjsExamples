import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Types of Data Binding';


  //interpolation - one way data binding
  public name:String = 'KIT & DSATM College - Bangalore';


  //property data binding


  public imgUrl:String = 'Flower.jpg';


  //Event Binding

public message:String = '';


public location = 'Bangalore, Karnataka';


public isvisible:boolean = false;


public course:String[] = ["Java", "Python", "CSS", "HTML", "Angular"];


onClick():void{
  this.message = "Welcome to Learn Anuglar";
}

toggleButton():void{

this.isvisible=!this.isvisible;

}

}
