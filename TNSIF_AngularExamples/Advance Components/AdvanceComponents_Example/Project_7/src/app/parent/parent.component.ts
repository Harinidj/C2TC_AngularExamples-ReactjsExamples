import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

parentData: string = "Data from Parent";


//Handler for the event emitted by the child
parentNotified()
{
  alert('Parent notified by Child!')

}
}
