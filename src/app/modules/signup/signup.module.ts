import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupRoutingModule } from 'src/app/modules/signup/signup-routing.module';
// components
import { SignUpComponent } from 'src/app/modules/signup/signup.component';

@NgModule({
    declarations: [SignUpComponent],
    imports: [CommonModule, SharedModule, SignupRoutingModule, ReactiveFormsModule],
})
export class SignupModule {}
