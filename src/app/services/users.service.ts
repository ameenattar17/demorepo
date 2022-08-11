import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getdata(){
   return {
    name : 'mike',
    age : '17' 

   };
  }
}
