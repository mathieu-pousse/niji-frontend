export class JWTTokenService {

  /** @ngInject */
  constructor(base64Service) {
    this.base64Service = base64Service;
    this.lastJWTToken = null;
  }
}
