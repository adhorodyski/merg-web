import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TokenInterceptor } from './interceptors';
import { MemberGuard, CreatorGuard } from './guards';
import { ApiService, AuthService, LanguageService, ModeService } from './services';
import { CapitalizePipe, SafePipe } from './pipes';
import { PatternValidatorDirective } from './directives';

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        MemberGuard,
        CreatorGuard,
        ApiService,
        AuthService,
        ModeService,
        LanguageService,
        SafePipe,
        CapitalizePipe,
        PatternValidatorDirective,
    ],
    declarations: [],
})
export class CoreModule {}
