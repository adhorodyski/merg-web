import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from 'src/app/modules/profile/profile-routing.module';
// services
import { PostService } from 'src/app/core/services/post.service';
// components
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { ProfileOverviewComponent } from 'src/app/modules/profile/profile-overview/profile-overview.component';

@NgModule({
    declarations: [ProfileComponent, ProfileOverviewComponent],
    providers: [PostService],
    imports: [CommonModule, SharedModule, ProfileRoutingModule, ReactiveFormsModule],
})
export class ProfileModule {}
