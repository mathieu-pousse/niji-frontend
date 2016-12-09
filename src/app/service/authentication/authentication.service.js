export class AuthenticationService {

  /** @ngInject */
  constructor($http, base64Service, jwtTokenService) {
    this.$http = $http;
    this.base64Service = base64Service;
    this.user = null;
    this.jwtTokenService = jwtTokenService;
  }

  isAuthenticated() {
    return this.user != null;
  }

  login(user, password) {
    return this.$http.get('/api/login', {
      headers: {'Authorization': 'Basic ' + this.getBasicAuth(user, password)}
    }).then(result => this.loggedIn(result.data));
  }

  logout() {
    this.user = null;
    this.jwtTokenService.lastJWTToken = null;
  }

  getBasicAuth(user, password) {
    return this.base64Service.encode(user + ':' + password);
  }

  loggedIn(user) {
    console.log('new user logged in ', user);
    return this.user = user;
  }

  currentUser() {
    return this.user;
  }
}
