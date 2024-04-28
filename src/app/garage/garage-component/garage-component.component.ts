import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-garage-component',
  templateUrl: './garage-component.component.html',
  styleUrls: ['./garage-component.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class GarageComponent implements OnInit {
  data: any[] | null = [];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
  } = {
    page: 1,
    limit: 7,
    totalItems: 0,
  };
  engineState: { [key: number]: boolean } = {};
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.api
      .getCars(this.pagination.page, this.pagination.limit)
      .subscribe((response) => {
        console.log(response);
        this.data = response.data;
        this.pagination.totalItems = response.totalItems;
      });
  }
  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadData();
  }

  totalPages(): number {
    return Math.ceil(this.pagination.totalItems / this.pagination.limit);
  }
  generateRandomCarsOnCLick(): any {
    console.log('cl');
    const cars: any = [];
    for (let i = 0; i < 100; i++) {
      this.api.createRandomCars().subscribe((response) => {
        this.loadData();
        console.log(response);
      });
    }
  }

   
}
