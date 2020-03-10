import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergingComponent } from '@src/app/pages/merging/merging.component';
import { TagsComponent } from '@src/app/pages/merging/tags/tags.component';

const routes: Routes = [
    {
        path: '',
        component: MergingComponent,
    },
    {
        path: 'tags',
        component: TagsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MergingRoutingModule {}
