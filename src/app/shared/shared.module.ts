import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '@src/app/shared/components';

@NgModule({
    imports: [CommonModule],
    providers: [HomeComponent],
    declarations: [HomeComponent],
})
export class SharedModule {}
