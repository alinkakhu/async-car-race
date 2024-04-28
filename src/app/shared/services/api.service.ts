import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpResponse,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://127.0.0.1:3000';
  carNames = [
    'Ferrari',
    'Lamborghini',
    'Porsche',
    'Tesla',
    'Ford',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Toyota',
    'Honda',
    'Chevrolet',
    'Nissan',
    'Jaguar',
    'Maserati',
    'Subaru',
  ];
  carModels: string[] = [
    'GT',
    'Huracan',
    '911',
    'Model S',
    'Mustang',
    '3 Series',
    'C-Class',
    'A4',
    'Corolla',
    'Accord',
    'Camaro',
    'GT-R',
    'F-Type',
    'Quattroporte',
    'Outback',
  ];
  carColors: string[] = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FFA500',
    '#800080',
    '#FFC0CB',
    '#000000',
  ];
  constructor(private http: HttpClient) {}

  getCars(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    return this.http
      .get<any[]>(`${this.url}/garage`, { params, observe: 'response' })
      .pipe(
        map((response: HttpResponse<any[]>) => {
          const totalCountHeader = response.headers.get('X-Total-Count');
          const totalItems = totalCountHeader
            ? parseInt(totalCountHeader, 10)
            : 0;
          return {
            data: response.body,
            totalItems: totalItems,
          };
        })
      );
  }
  generateRandomCarName = () => {
    const randomBrand =
      this.carNames[Math.floor(Math.random() * this.carNames.length)];
    const randomModel =
      this.carModels[Math.floor(Math.random() * this.carModels.length)];

    return `${randomBrand} ${randomModel}`;
  };
  generateRandomColor = (): string =>
    this.carColors[Math.floor(Math.random() * this.carColors.length)];

  generateRandomCar() {
    const newCar: {
      name: string;
      color: string;
    } = {
      name: this.generateRandomCarName(),
      color: this.generateRandomColor(),
    };

    return newCar;
  }
  createRandomCars(): Observable<any> {
    const newCars = this.generateRandomCar();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.url}/garage`, newCars, { headers });
  }
  startEngine(id: number): Observable<any> {
    return this.http.patch(`${this.url}/engine?id=${id}&status=started`, {});
  }

  stopEngine(id: number): Observable<any> {
    return this.http.patch(`${this.url}/engine?id=${id}&status=stopped`, {});
  }

  driveMode(id: number): Observable<any> {
    return this.http.patch(`${this.url}/engine?id=${id}&status=drive`, {});
  }
}
