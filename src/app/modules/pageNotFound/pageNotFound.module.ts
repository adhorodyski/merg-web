import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { PageNotFoundRoutingModule } from 'src/app/modules/pageNotFound/pageNotFound-routing.module';
// components
import { PageNotFoundComponent } from 'src/app/modules/pageNotFound/pageNotFound.component';

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [CommonModule, SharedModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
