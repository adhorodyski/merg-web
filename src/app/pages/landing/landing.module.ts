import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { LandingComponent } from '@src/app/pages/landing/landing.component';
import { LandingRoutingModule } from '@src/app/pages/landing/landing-routing.module';

@NgModule({
    declarations: [LandingComponent],
    imports: [CommonModule, SharedModule, LandingRoutingModule],
})
export class LandingModule {}
