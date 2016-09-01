class MainController {
  /** @ngInject */
  constructor($q, $http) {
    this.$q = $q
    this.$http = $http
  }

  getMatches(input) {
    return this.$http.get('/api/addresses/fr/zips/59100', {params: {q: input}})
    .then(response => response.data)
  }
}

export const main = {
  template: require('./main.html'), 
  controller: MainController
};
