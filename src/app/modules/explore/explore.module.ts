import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { SharedModule } from '@src/app/shared/shared.module';
import { ExploreRoutingModule } from '@src/app/modules/explore/explore-routing.module';
// services
import { PostService } from '@src/app/core/services/post.service';
// components
import { ExploreComponent } from '@src/app/modules/explore/explore.component';
import { ExploreSearchComponent } from '@src/app/modules/explore/explore-search/explore-search.component';

@NgModule({
    declarations: [ExploreComponent, ExploreSearchComponent],
    providers: [PostService],
    imports: [CommonModule, SharedModule, ExploreRoutingModule, ReactiveFormsModule],
})
export class ExploreModule {}
