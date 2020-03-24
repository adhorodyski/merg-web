import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { SharedModule } from '@src/app/shared/shared.module';
import { DashboardRoutingModule } from '@src/app/modules/dashboard/dashboard-routing.module';
// services
import { PostService } from '@src/app/core/services/post.service';
// components
import { DashboardComponent } from '@src/app/modules/dashboard/dashboard.component';

@NgModule({
    declarations: [DashboardComponent],
    providers: [PostService],
    imports: [CommonModule, SharedModule, DashboardRoutingModule, ReactiveFormsModule],
})
export class DashboardModule {}
