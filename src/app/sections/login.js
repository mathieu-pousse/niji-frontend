class LoginController {
  /** @ngInject */
  constructor($http, authenticationService) {
    this.authenticationService = authenticationService;
    this.login = '';
    this.password = '';
  }

  onLogin() {
    console.log('prout')
    this.authenticationService.authenticate({login: this.login, password: this.password});
  }
}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};
