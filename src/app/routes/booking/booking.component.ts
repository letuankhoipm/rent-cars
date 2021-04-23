import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;
  id: any;
  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.bookingForm = new FormGroup({
      carId: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      phoneNumber: new FormControl(null),
      receiveVehicle: new FormControl('home'),
      route: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.bookingForm.patchValue({
        carId: this.id
      })
      console.log(this.id);
    });
  }

  onSubmit() {
    const req = {
      ...this.bookingForm.value,
      startDate: this.formatDate(this.bookingForm.value.startDate),
      endDate: this.formatDate(this.bookingForm.value.endDate),
    }
    console.log(req);
    this.carService.bookingCar(req).subscribe((res: any) => {
      console.log(res);
      window.alert("Booking success");
    })
  }

  formatDate(date) {
    const raw = {
      ...date,
      month: date.month - 1,
    };
    const result = moment.utc(raw).toISOString();
    return result;
  }

}
