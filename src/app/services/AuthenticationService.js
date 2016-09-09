export class AuthenticationService {
    
  /** @ngInject */
  constructor($http, $state) {
      this.$http = $http;
      this.$state = $state;
  }

  authenticate(credentials) {
    this.$state.go('app');
  }
}