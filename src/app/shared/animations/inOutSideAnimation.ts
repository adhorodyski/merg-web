import { trigger, transition, animate, style } from '@angular/animations';

export const inOutSideAnimation = trigger('inOutSideAnimation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-5px)' }),
        animate('0.2s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate('0.2s ease-in-out', style({ opacity: 0, transform: 'translateX(-5px)' })),
    ]),
]);
