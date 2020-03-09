import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { ExploreComponent } from '@src/app/components/explore/explore.component';
import { ExploreRoutingModule } from '@src/app/components/explore/explore-routing.module';

@NgModule({
    declarations: [ExploreComponent],
    imports: [CommonModule, SharedModule, ExploreRoutingModule],
})
export class ExploreModule {}
