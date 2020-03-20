import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@src/app/shared/shared.module';
import { SettingsRoutingModule } from '@src/app/pages/settings/settings-routing.module';
import { SettingsComponent } from '@src/app/pages/settings/settings.component';
import { SettingsPersonalComponent } from '@src/app/pages/settings/components/settings-personal/settings-personal.component';
import { SettingsStreamsComponent } from '@src/app/pages/settings/components/settings-streams/settings-streams.component';
import { SettingsGeneralComponent } from '@src/app/pages/settings/components/settings-general/settings-general.component';

@NgModule({
    declarations: [SettingsComponent, SettingsPersonalComponent, SettingsStreamsComponent, SettingsGeneralComponent],
    imports: [CommonModule, SharedModule, SettingsRoutingModule, ReactiveFormsModule],
})
export class SettingsModule {}
