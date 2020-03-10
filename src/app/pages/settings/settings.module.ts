import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { SettingsComponent } from '@src/app/pages/settings/settings.component';
import { SettingsRoutingModule } from '@src/app/pages/settings/settings-routing.module';

@NgModule({
    declarations: [SettingsComponent],
    imports: [CommonModule, SharedModule, SettingsRoutingModule],
})
export class SettingsModule {}
