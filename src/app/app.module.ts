import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { AppComponent } from '@src/app/app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot([]), CoreModule, SharedModule, LayoutModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
