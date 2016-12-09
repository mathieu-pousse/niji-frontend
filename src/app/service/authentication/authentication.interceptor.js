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
    if (!request.headers['Authorization'] && this.jwtTokenService.lastJWTToken) {
      request.headers['Authorization'] = 'Bearer ' + this.jwtTokenService.lastJWTToken;
    }
    return request;
  }

  response(response) {
    const authToken = response.headers('Authorization');
    if (authToken) {
      this.jwtTokenService.lastJWTToken = authToken.replace(/^Bearer /, '');
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
