import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  updateProfile(profileData:Profile){
    
  }
  viewProfile(uname:string){

  }
  deleteProfile(uname:string){

  }
  addProfile(profileData:Profile){
    alert("Profile Added in Profile Service for : "+profileData.name);
  }
}
