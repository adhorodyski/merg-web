import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorGuard, MemberGuard } from '@src/app/core';
import { MainLayoutComponent } from '@src/app/shared/layout/main-layout';
import { MinimalLayoutComponent } from '@src/app/shared/layout/minimal-layout';

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
                canActivate: [MemberGuard],
                loadChildren: () => import('@src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'explore',
                pathMatch: 'full',
                canActivate: [MemberGuard],
                loadChildren: () => import('@src/app/pages/explore/explore.module').then(m => m.ExploreModule),
            },
            {
                path: 'settings',
                pathMatch: 'full',
                canActivate: [MemberGuard],
                loadChildren: () => import('@src/app/pages/settings/settings.module').then(m => m.SettingsModule),
            },
            {
                path: 'u/:username',
                loadChildren: () => import('@src/app/pages/profile/profile.module').then(m => m.ProfileModule),
            },
        ],
    },
    {
        path: '',
        component: MinimalLayoutComponent,
        children: [
            {
                path: 'landing',
                loadChildren: () => import('@src/app/pages/landing/landing.module').then(m => m.LandingModule),
            },
            {
                path: 'login',
                loadChildren: () => import('@src/app/pages/login/login.module').then(m => m.LoginModule),
            },
            {
                path: 'register',
                loadChildren: () => import('@src/app/pages/register/register.module').then(m => m.RegisterModule),
            },
            {
                path: 'merging',
                canActivate: [MemberGuard, CreatorGuard],
                loadChildren: () => import('@src/app/pages/merging/merging.module').then(m => m.MergingModule),
            },
            {
                path: '**',
                loadChildren: () =>
                    import('@src/app/pages/pageNotFound/pageNotFound.module').then(m => m.PageNotFoundModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
