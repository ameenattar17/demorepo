import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userapp';
  name="";
  age="";
  
 constructor(private user : UsersService)
 {
  console.warn(this.user.getdata())
 let data=this.user.getdata();
 this.name=data.name;
 this.age=data.age;
  }
  
  }

