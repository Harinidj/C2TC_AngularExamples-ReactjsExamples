import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project_8';


  constructor(private userService:UserService){}

  applyForm = new FormGroup({

    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),

  });

  submitApplication()
  {
      this.userService.submitApplication(
        this.applyForm.value.firstname ?? '',
        this.applyForm.value.lastname ?? '',
        this.applyForm.value.email ?? '',
      );
  }

}
