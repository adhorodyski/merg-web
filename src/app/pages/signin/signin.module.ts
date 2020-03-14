import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@src/app/shared/shared.module';
import { SignInRoutingModule } from '@src/app/pages/signin/signin-routing.module';
import { SignInComponent } from '@src/app/pages/signin/signin.component';

@NgModule({
    declarations: [SignInComponent],
    imports: [CommonModule, SharedModule, SignInRoutingModule, ReactiveFormsModule],
})
export class SignInModule {}
