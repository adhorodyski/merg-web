import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { ProfileComponent } from '@src/app/pages/profile/profile.component';
import { ProfileRoutingModule } from '@src/app/pages/profile/profile-routing.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, SharedModule, ProfileRoutingModule],
})
export class ProfileModule {}
