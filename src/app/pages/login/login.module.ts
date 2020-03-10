import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { LoginComponent } from '@src/app/pages/login/login.component';
import { LoginRoutingModule } from '@src/app/pages/login/login-routing.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, SharedModule, LoginRoutingModule],
})
export class LoginModule {}
