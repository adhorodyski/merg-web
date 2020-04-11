import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TokenInterceptor } from './interceptors';
import { MemberGuard, CreatorGuard, NoAuthGuard } from './guards';
import { ApiService, AuthService, LanguageService, ModeService, PostService, SearchService } from './services';
import { SafePipe } from './pipes';
import { PatternValidatorDirective, ClickOutsideDirective } from './directives';

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        NoAuthGuard,
        MemberGuard,
        CreatorGuard,
        ApiService,
        AuthService,
        ModeService,
        LanguageService,
        PostService,
        SearchService,
        SafePipe,
        PatternValidatorDirective,
        ClickOutsideDirective,
    ],
    declarations: [],
})
export class CoreModule {}
