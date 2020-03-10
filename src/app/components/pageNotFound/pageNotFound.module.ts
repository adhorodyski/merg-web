import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { PageNotFoundComponent } from '@src/app/components/pageNotFound/pageNotFound.component';
import { PageNotFoundRoutingModule } from '@src/app/components/pageNotFound/pageNotFound-routing.module';

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [CommonModule, SharedModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
