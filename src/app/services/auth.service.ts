import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return 'some-auth-token';
  }

  getCustomerId() {
    return '8a4324f0-40e7-11e9-90e8-df8f2c248da4';
  }

  getShopId() {
    return '955094e2-40e7-11e9-86dd-89925f7acfe1';
  }
}
