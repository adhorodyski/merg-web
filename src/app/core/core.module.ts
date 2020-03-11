import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TokenInterceptor } from './interceptors';
import { MemberGuard, CreatorGuard, NoAuthGuard } from './guards';
import { ApiService, AuthService, ThemeService } from './services';
import { SafePipe } from './pipes';

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor },
        MemberGuard,
        CreatorGuard,
        NoAuthGuard,
        ApiService,
        AuthService,
        ThemeService,
        SafePipe,
    ],
    declarations: [],
})
export class CoreModule {}
