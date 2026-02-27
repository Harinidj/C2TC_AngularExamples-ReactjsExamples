import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

submitApplication(firstname:string,lastname:string, email:string)
{
  console.log("First Name: ",firstname,"Last Name: ",lastname, "Email: ",email);
}

}
