import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers: []
})
export class AboutMeComponent implements OnInit {

  profileForm: FormGroup;
  constructor(private profileService: ProfileService) {
    this.profileForm = new FormGroup({
      id: new FormControl(null),
      address: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      gender: new FormControl(null),
      idCard: new FormControl(null),
      password: new FormControl(null),
      phoneNumber: new FormControl(null),
      roleId: new FormControl(null),
      roleName: new FormControl(null),
    })
  }

  ngOnInit() {

  }

  onSave = () => {
    const req = {
      ...this.profileForm.value
    };
    
  }

  getProfile() {
    this.profileService.getProfile().subscribe((res: any) => {
      this.profileForm.patchValue({
        ...res.data
      })
    })
  }

}
