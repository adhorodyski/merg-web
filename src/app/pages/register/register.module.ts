import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { RegisterComponent } from '@src/app/pages/register/register.component';
import { RegisterRoutingModule } from '@src/app/pages/register/register-routing.module';

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule, SharedModule, RegisterRoutingModule],
})
export class RegisterModule {}
