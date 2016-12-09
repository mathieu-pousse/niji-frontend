export class AuthenticationInterceptor {
  /** @ngInject */
  constructor($q, $window, jwtTokenService) {
    this.$q = $q;
    this.$window = $window;
    this.jwtTokenService = jwtTokenService;
    this.request = this.request.bind(this);
    this.response = this.response.bind(this);
    this.responseError = this.responseError.bind(this);
  }


  request(request) {
    const lastJWTToken = this.jwtTokenService.getLastJWTToken();
    if (!request.headers['Authorization'] && lastJWTToken) {
      request.headers['Authorization'] = 'Bearer ' + lastJWTToken;
    }
    return request;
  }

  response(response) {
    const authToken = response.headers('Authorization');
    if (authToken) {
      this.jwtTokenService.setLastJWTToken(authToken.replace(/^Bearer /, ''));
    }
    return response;
  }

  responseError(rejection) {
    console.log('got responseError', rejection);
    const authToken = rejection.config.headers.Authorization;
    if ((rejection.status === 401 || rejection.status === 403) && !authToken) {
      this.$window.location.replace('/');
      return this.$q.defer(rejection);
    }
    return this.$q.reject(rejection);
  }

}
