import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TokenInterceptor } from './interceptors';
import { MemberGuard, CreatorGuard } from './guards';
import { ApiService, AuthService, ThemeService } from './services';
import { SafePipe } from './pipes';
import { PatternValidatorDirective } from './directives';

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
