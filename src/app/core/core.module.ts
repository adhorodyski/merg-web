import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TokenInterceptor, ApiPrefixInterceptor } from './interceptors';
import { MemberGuard, CreatorGuard, NoAuthGuard } from './guards';
import { ApiService, ThemeService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MemberGuard,
    CreatorGuard,
    NoAuthGuard,
    ApiService,
    ThemeService,
  ],
  declarations: [],
})
export class CoreModule {}
