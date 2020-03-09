import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@src/app/shared/layout/main-layout';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('@src/app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'explore',
                loadChildren: () => import('@src/app/components/explore/explore.module').then(m => m.ExploreModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
