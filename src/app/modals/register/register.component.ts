import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regisForm: FormGroup;
  constructor() {
    this.regisForm = new FormGroup({
      address: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      gender: new FormControl(null),
      idCard: new FormControl(null),
      password: new FormControl(null),
      phoneNumber: new FormControl(null),
      roleId: new FormControl(null),
    })
  }

  ngOnInit() {
  }

  onRegister = () => {
    const req = {
      ...this.regisForm.value
    }
    console.log(req);
  }

}
