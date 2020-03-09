import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '@src/app/shared/shared.module';

import { AppComponent } from '@src/app/app.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
    declarations: [AppComponent],
    imports: [NativeScriptModule, RouterModule.forRoot([]), CoreModule, SharedModule, RouterModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
