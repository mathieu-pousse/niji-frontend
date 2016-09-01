class LoginController {
  /** @ngInject */
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }
}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};
