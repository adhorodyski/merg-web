import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
    constructor() {}

    transform(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}
