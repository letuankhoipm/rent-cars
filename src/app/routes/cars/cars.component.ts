import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars;
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getAllCars().subscribe((res: any) => {
      this.cars = res.data;
    })
  }

}
