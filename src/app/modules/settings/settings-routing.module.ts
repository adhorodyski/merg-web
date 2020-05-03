import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { SettingsComponent } from 'src/app/modules/settings/settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
