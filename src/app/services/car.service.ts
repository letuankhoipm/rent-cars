import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService {
  public carEndpoint = `${environment.API_URL}/cars`;
  public bookingEndpoint = `${environment.API_URL}/contracts`

  getAllCars() {
    return this.get(this.carEndpoint);
  }

  getCarById(id: any) {
    return this.get(`${this.carEndpoint}/${id}`);
  }

  bookingCar(body: any) {
    return this.post(body, this.bookingEndpoint);
  }
}
