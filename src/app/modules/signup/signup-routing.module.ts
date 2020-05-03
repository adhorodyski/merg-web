import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACCOUNTS } from 'src/app/core/models/accounts.enum';

// components
import { SignUpComponent } from 'src/app/modules/signup/signup.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'member',
    },
    {
        path: 'member',
        component: SignUpComponent,
        data: {
            accountType: ACCOUNTS.MEMBER,
        },
    },
    {
        path: 'creator',
        component: SignUpComponent,
        data: {
            accountType: ACCOUNTS.CREATOR,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SignupRoutingModule {}
