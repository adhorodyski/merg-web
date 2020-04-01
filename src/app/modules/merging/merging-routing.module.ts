import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { MergingComponent } from '@src/app/modules/merging/merging/merging.component';
import { TagsComponent } from '@src/app/modules/merging/tags/tags.component';
import { WelcomeComponent } from '@src/app/modules/merging/welcome/welcome.component';

const routes: Routes = [
    {
        path: '',
        component: MergingComponent,
    },
    {
        path: 'tags',
        component: TagsComponent,
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MergingRoutingModule {}
