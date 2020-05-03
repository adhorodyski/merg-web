import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninRoutingModule } from 'src/app/modules/signin/signin-routing.module';
// components
import { SignInComponent } from 'src/app/modules/signin/signin.component';

@NgModule({
    declarations: [SignInComponent],
    imports: [CommonModule, SharedModule, SigninRoutingModule, ReactiveFormsModule],
})
export class SigninModule {}
