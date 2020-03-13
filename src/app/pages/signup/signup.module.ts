import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { SignUpComponent } from '@src/app/pages/signup/signup.component';
import { SignUpRoutingModule } from '@src/app/pages/signup/signup-routing.module';

@NgModule({
    declarations: [SignUpComponent],
    imports: [CommonModule, SharedModule, SignUpRoutingModule],
})
export class SignUpModule {}
