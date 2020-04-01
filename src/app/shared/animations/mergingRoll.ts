import { trigger, transition, animate, style } from '@angular/animations';

export const mergingRoll = trigger('mergingRoll', [
    transition(':increment', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':decrement', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateY(-20px)' })),
    ]),
]);
