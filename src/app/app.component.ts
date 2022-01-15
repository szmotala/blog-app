import {
  animate,
  query,
  transition,
  trigger,
  style,
  group,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ height: '!' }),
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':leave', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter, :leave',
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
          }),
          { optional: true }
        ),
        group([
          query(':leave', [animate('0.5s ease', style({ opacity: 0 }))], {
            optional: true,
          }),
          query(':enter', [animate('0.5s ease', style({ opacity: 1 }))], {
            optional: true,
          }),
        ]),
      ]),

      // transition('1 => 3', [
      //   style({ height: '!' }),
      //   query(':enter', style({ opacity: 0 }), { optional: true }),
      //   query(':leave', style({ opacity: 0 }), { optional: true }),
      //   query(
      //     ':enter, :leave',
      //     style({
      //       position: 'absolute',
      //       top: 0,
      //       left: 0,
      //       width: '100%',
      //       opacity: 0,
      //     }),
      //     { optional: true }
      //   ),
      //   group([
      //     query(':leave', [animate('0.5s ease', style({ opacity: 0 }))], {
      //       optional: true,
      //     }),
      //     query(':enter', [animate('0.5s ease', style({ opacity: 1 }))], {
      //       optional: true,
      //     }),
      //   ]),
      // ]),
    ]),
  ],
})
export class AppComponent {
  animOutlet(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
