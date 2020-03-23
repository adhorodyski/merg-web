import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { ExploreRoutingModule } from '@src/app/pages/explore/explore-routing.module';
import { ExploreComponent } from '@src/app/pages/explore/explore.component';
import { ExploreSearchComponent } from '@src/app/pages/explore/sections/explore-search/explore-search.component';

@NgModule({
    declarations: [ExploreComponent, ExploreSearchComponent],
    imports: [CommonModule, SharedModule, ExploreRoutingModule],
})
export class ExploreModule {}
