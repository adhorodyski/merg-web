import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { ProfileRoutingModule } from '@src/app/pages/profile/profile-routing.module';
import { ProfileComponent } from '@src/app/pages/profile/profile.component';
import { ProfileOverviewComponent } from '@src/app/pages/profile/components/profile-overview/profile-overview.component';

@NgModule({
    declarations: [ProfileComponent, ProfileOverviewComponent],
    imports: [CommonModule, SharedModule, ProfileRoutingModule],
})
export class ProfileModule {}
