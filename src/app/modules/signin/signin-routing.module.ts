import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { SignInComponent } from 'src/app/modules/signin/signin.component';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SigninRoutingModule {}
