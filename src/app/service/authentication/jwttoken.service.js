export class JWTTokenService {

  /** @ngInject */
  constructor(base64Service) {
    this.base64Service = base64Service;
    // try to reload previous
    this._lastJWTToken = sessionStorage.lastJWTToken;
  }

  getLastJWTToken() {
    return this._lastJWTToken;
  }

  setLastJWTToken(token) {
    sessionStorage.lastJWTToken = token;
    this._lastJWTToken = token;
  }
}
