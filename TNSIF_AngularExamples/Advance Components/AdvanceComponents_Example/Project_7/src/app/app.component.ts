import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  imports: [ParentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project_7';
}
