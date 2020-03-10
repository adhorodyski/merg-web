import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { MergingRoutingModule } from '@src/app/pages/merging/merging-routing.module';
import { MergingComponent } from '@src/app/pages/merging/merging.component';
import { TagsComponent } from '@src/app/pages/merging/tags/tags.component';

@NgModule({
    declarations: [MergingComponent, TagsComponent],
    imports: [CommonModule, SharedModule, MergingRoutingModule],
})
export class MergingModule {}
