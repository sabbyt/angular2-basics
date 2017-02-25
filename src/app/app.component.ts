import { Component } from '@angular/core';
import { UsersService } from './users.service';

// MUST HAVE A TEMPLATE
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [UsersService]
})
export class AppComponent {
  title = 'app works!';
  age = 25;

  getName () {
    return 'Sab'
  }

  setAge(age: number) {
    this.age = age;
  }

  person = {
    name: 'Sab',
    dog: 'Chloe'
  }

  users: any[];

// default js/typescript constructor
// dependency injection here
  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }

  onChildAlert(message: string) {
    alert(message);
  }
}
