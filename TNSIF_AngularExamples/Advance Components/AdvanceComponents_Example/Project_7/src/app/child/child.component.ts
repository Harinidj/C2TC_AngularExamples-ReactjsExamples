import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

//Decorator

@Input() inputData!: string;

@Output() onNotify: EventEmitter<void> = new EventEmitter<void>(); //Event to notify parent


notifyParent()
{
  this.onNotify.emit(); //Emitting the event
}

}
