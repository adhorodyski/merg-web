import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared';

import { MainLayoutComponent } from '@src/app/shared/layout/main-layout';
import { LayoutRoutingModule } from '@src/app/shared/layout/layout-routing.module';
import { HeaderComponent } from '@src/app/shared/layout/header';

@NgModule({
    declarations: [MainLayoutComponent, HeaderComponent],
    imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
