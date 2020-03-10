import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@src/app/pages/pageNotFound/pageNotFound.component';

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
