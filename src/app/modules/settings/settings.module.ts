import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsRoutingModule } from 'src/app/modules/settings/settings-routing.module';
// components
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { SettingsPersonalComponent } from 'src/app/modules/settings/settings-personal/settings-personal.component';
import { SettingsStreamsComponent } from 'src/app/modules/settings/settings-streams/settings-streams.component';
import { SettingsGeneralComponent } from 'src/app/modules/settings/settings-general/settings-general.component';

@NgModule({
    declarations: [SettingsComponent, SettingsPersonalComponent, SettingsStreamsComponent, SettingsGeneralComponent],
    imports: [CommonModule, SharedModule, SettingsRoutingModule, ReactiveFormsModule],
})
export class SettingsModule {}
