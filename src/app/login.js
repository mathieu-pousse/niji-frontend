class LoginController {

  /** @ngInject */
  constructor($state, $http, $timeout, authenticationService) {
    this.$state = $state;
    this.$http = $http;
    this.$timeout = $timeout;
    this.authenticationService = authenticationService;
    this.showError = false;
    this.errorMessage = '';
  }

  login(credentials) {
    if (!credentials || !credentials.login) {
      credentials = {
        login: 'login',
        password: 'password'
      };
    }
    this.authenticationService.login(credentials.login, credentials.password)
      .then(user => this.$state.transitionTo('home'))
      .catch(e => {
        console.log(e);
        this.showError = true;
        this.errorMessage = 'Erreur de login.';
        this.$timeout(() => {
          this.showError = false;
          this.errorMessage = '';
        }, 5000);
      });
  }
}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};
