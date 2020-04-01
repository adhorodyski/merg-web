import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { SharedModule } from '@src/app/shared/shared.module';
import { MergingRoutingModule } from '@src/app/modules/merging/merging-routing.module';
// components
import { MergingComponent } from '@src/app/modules/merging/merging/merging.component';
import { TagsComponent } from '@src/app/modules/merging/tags/tags.component';
import { WelcomeComponent } from '@src/app/modules/merging/welcome/welcome.component';

@NgModule({
    declarations: [MergingComponent, TagsComponent, WelcomeComponent],
    imports: [CommonModule, SharedModule, MergingRoutingModule],
})
export class MergingModule {}
