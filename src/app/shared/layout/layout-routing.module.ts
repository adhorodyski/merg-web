import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@src/app/shared/layout/main-layout';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () =>
                    import('@src/app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'explore',
                pathMatch: 'full',
                loadChildren: () => import('@src/app/components/explore/explore.module').then(m => m.ExploreModule),
            },
            {
                path: 'settings',
                pathMatch: 'full',
                loadChildren: () => import('@src/app/components/settings/settings.module').then(m => m.SettingsModule),
            },
            {
                path: 'u/:username',
                pathMatch: 'full',
                loadChildren: () => import('@src/app/components/profile/profile.module').then(m => m.ProfileModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
