class HomeController {

  /** @ngInject */
  constructor($http, $state, authenticationService) {
    this.$http = $http;
    this.$state = $state;
    this.authenticationService = authenticationService;
  }

  again() {
    this.$http.get('/api/login')
      .then(response => response.data)
      .then(user => console.log(user.uid));
  }

  user() {
    return this.authenticationService.currentUser();
  }
}

export const home = {
  template: require('./home.html'),
  controller: HomeController
};
