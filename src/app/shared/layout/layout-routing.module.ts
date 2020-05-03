import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// guards
import { CreatorGuard, MemberGuard, NoAuthGuard } from 'src/app/core/guards';
// layouts
import { MainLayoutComponent } from 'src/app/shared/layout/main-layout';
import { MinimalLayoutComponent } from 'src/app/shared/layout/minimal-layout';

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
                loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'explore',
                pathMatch: 'full',
                canActivate: [MemberGuard],
                loadChildren: () => import('src/app/modules/explore/explore.module').then(m => m.ExploreModule),
            },
            {
                path: 'settings',
                pathMatch: 'full',
                canActivate: [MemberGuard],
                loadChildren: () => import('src/app/modules/settings/settings.module').then(m => m.SettingsModule),
            },
            {
                path: 'u/:username',
                loadChildren: () => import('src/app/modules/profile/profile.module').then(m => m.ProfileModule),
            },
        ],
    },
    {
        path: '',
        component: MinimalLayoutComponent,
        children: [
            {
                path: 'landing',
                canActivate: [NoAuthGuard],
                loadChildren: () => import('src/app/modules/landing/landing.module').then(m => m.LandingModule),
            },
            {
                path: 'signin',
                canActivate: [NoAuthGuard],
                loadChildren: () => import('src/app/modules/signin/signin.module').then(m => m.SigninModule),
            },
            {
                path: 'signup',
                canActivate: [NoAuthGuard],
                loadChildren: () => import('src/app/modules/signup/signup.module').then(m => m.SignupModule),
            },
            {
                path: 'merging',
                canActivate: [MemberGuard, CreatorGuard],
                loadChildren: () => import('src/app/modules/merging/merging.module').then(m => m.MergingModule),
            },
            {
                path: '**',
                loadChildren: () =>
                    import('src/app/modules/pageNotFound/pageNotFound.module').then(m => m.PageNotFoundModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
