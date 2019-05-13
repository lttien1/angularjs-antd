import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newBody = {
      ...req.body,
      customerId: this.authService.getCustomerId(),
      shopId: this.authService.getShopId()
    };
    const newReq = req.clone({ body: newBody });
    return next.handle(newReq);
  }
}
