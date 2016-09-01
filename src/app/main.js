class MainController {
  /** @ngInject */
  constructor($q, $http) {
    this.$q = $q
    this.$http = $http
  }

  getMatches(input) {
    const result = this.$q.defer()
    result.resolve([
        {display: "yo"},
        {display: "mma"}, 
        {display: "mma1"}, 
        {display: "mma2"}, 
        {display: "mma3"}, 
        {display: "mma4"}
      ].filter(i =>  i.display.indexOf(input) != -1))
    return result.promise
  }
}

export const main = {
  template: require('./main.html'), 
  controller: MainController
};
