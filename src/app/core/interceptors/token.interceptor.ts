import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const token = 'customToken';

    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }

    const updatedRequest = request.clone({ setHeaders: headersConfig });
    return next.handle(updatedRequest);
  }
}
