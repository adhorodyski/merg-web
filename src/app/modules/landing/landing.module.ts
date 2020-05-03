import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from 'src/app/modules/landing/landing-routing.module';
// components
import { LandingComponent } from 'src/app/modules/landing/landing.component';

@NgModule({
    declarations: [LandingComponent],
    imports: [CommonModule, SharedModule, LandingRoutingModule, ReactiveFormsModule],
})
export class LandingModule {}
