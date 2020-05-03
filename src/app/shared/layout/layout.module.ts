import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';

import { LayoutRoutingModule } from 'src/app/shared/layout/layout-routing.module';
import { MainLayoutComponent } from 'src/app/shared/layout/main-layout';
import { MinimalLayoutComponent } from 'src/app/shared/layout/minimal-layout';
import { HeaderComponent } from 'src/app/shared/layout/main-layout/header';
import { HeaderMinimalComponent } from 'src/app/shared/layout/minimal-layout/header-minimal';

@NgModule({
    declarations: [MainLayoutComponent, MinimalLayoutComponent, HeaderComponent, HeaderMinimalComponent],
    imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
