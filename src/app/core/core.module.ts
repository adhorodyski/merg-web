import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PatternValidatorDirective } from '@src/app/core/directives';

import { TokenInterceptor } from './interceptors';
import { MemberGuard, CreatorGuard } from './guards';
import { ApiService, AuthService, ThemeService } from './services';
import { SafePipe } from './pipes';

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        MemberGuard,
        CreatorGuard,
        ApiService,
        AuthService,
        ThemeService,
        SafePipe,
        PatternValidatorDirective,
    ],
    declarations: [],
})
export class CoreModule {}
