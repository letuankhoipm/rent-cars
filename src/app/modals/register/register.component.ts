import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regisForm = new FormGroup({
    address: new FormControl(null),
    email: new FormControl(null),
    fullName: new FormControl(null),
    gender: new FormControl(null),
    idCard: new FormControl(null),
    password: new FormControl(null),
    phoneNumber: new FormControl(null),
    roleId: new FormControl(null),
  })
  constructor() { }

  ngOnInit() {
  }

}
