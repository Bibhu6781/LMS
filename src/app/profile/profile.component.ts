import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProfileService } from '../profile.service';
import { Profile} from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
  }

  addProfile(profileForm){
    // console.log("hello "+profileForm.email);
    let profile=new Profile(profileForm.name,profileForm.email,profileForm.address,profileForm.contactNo);
    this.profileService.addProfile(profile);
  }
}
