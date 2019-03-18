import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;
  users:User;
  constructor() { }
  addUser(userData){
    this.user=new User(userData.uname,userData.pwd);
  }
  updateUser(pwd:string){
    this.user.pwd=pwd;
  }
  allUsers(){
    let users=[new User("Bibhu","abc"),new User("Bibhu","abc"),new User("Bibhu","abc"),new User("Bibhu","abc")];
    return this.users;
  }
}
