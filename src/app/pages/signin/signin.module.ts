import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { SignInComponent } from '@src/app/pages/signin/signin.component';
import { SignInRoutingModule } from '@src/app/pages/signin/signin-routing.module';

@NgModule({
    declarations: [SignInComponent],
    imports: [CommonModule, SharedModule, SignInRoutingModule],
})
export class SignInModule {}
