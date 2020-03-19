import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { SettingsRoutingModule } from '@src/app/pages/settings/settings-routing.module';
import { SettingsComponent } from '@src/app/pages/settings/settings.component';
import { SettingsGeneralComponent } from '@src/app/pages/settings/components/settings-general/settings-general.component';

@NgModule({
    declarations: [SettingsComponent, SettingsGeneralComponent],
    imports: [CommonModule, SharedModule, SettingsRoutingModule],
})
export class SettingsModule {}
