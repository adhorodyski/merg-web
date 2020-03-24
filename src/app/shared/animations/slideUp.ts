import { trigger, transition, animate, style } from '@angular/animations';

export const slideUp = trigger('slideUp', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5px)' }),
        animate('0.2s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('0.2s ease-in-out', style({ opacity: 0, transform: 'translateY(-5px)' })),
    ]),
]);
