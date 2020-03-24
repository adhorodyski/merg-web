import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { PageNotFoundComponent } from '@src/app/modules/pageNotFound/pageNotFound.component';

const routes: Routes = [
    {
        path: '',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
