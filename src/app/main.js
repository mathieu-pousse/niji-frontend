class MainController {
  /** @ngInject */
  constructor($http) {
    
  }

  getMatches(input) {
    return [{display: "yo"}, {display:"mma"}]
  }
}

export const main = {
  template: require('./main.html'), 
  controller: MainController
};
