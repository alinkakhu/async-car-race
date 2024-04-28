import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { carMoveRightAnimation } from './car.animation';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  animations: [carMoveRightAnimation],
})
export class CarComponent implements OnInit {
  @Input() car: any;
  engineState: string = '';
  animationState: string = 'movingRight';
  distance: number = 0;
  duration: number = 0;
  ngOnInit() {}
  constructor(private api: ApiService) {}

  startRace() {
    this.animationState = 'movingRight';
    this.distance = 700;
    this.duration = 4000;
  }
}
