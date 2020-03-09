import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { DashboardComponent } from '@src/app/components/dashboard/dashboard.component';
import { DashboardRoutingModule } from '@src/app/components/dashboard/dashboard-routing.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
