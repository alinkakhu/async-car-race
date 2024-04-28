import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationMetadata,
} from '@angular/animations';

export const carMoveRightAnimation: AnimationMetadata[] = [
  trigger('carMoveRightAnimation', [
    state(
      'movingRight',
      style({
        transform: 'translateX({{ distance }}px)',
      }),
      { params: { distance: 0 } }
    ),
    transition('* => movingRight', animate('{{ duration }}ms linear')),
  ]),
];
