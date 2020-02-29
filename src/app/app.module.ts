import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { AppRoutingModule } from '@src/app/app-routing.module';

import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/components';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, CoreModule, SharedModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
