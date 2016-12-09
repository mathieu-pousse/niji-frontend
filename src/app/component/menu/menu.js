class MenuController {

  /** @ngInject */
  constructor(authenticationService, $state) {
    this.authenticationService = authenticationService;
    this.$state = $state;

    const roles = this.authenticationService.currentUser().roles;
    const links = [];
    for (const role in roles) {
      if (role === 'marketing') {
        links.push({label: 'Hierarchie', state: 'hierachie'});
        links.push({label: 'Documents', state: 'documents'});
        links.push({label: 'Produits', state: 'produits'});
        links.push({label: 'Contacts', state: 'contacts'});
        links.push({label: 'Marketing', state: 'marketing'})
      } else if (role === 'tech') {
        links.push({label: 'Hierarchie', state: 'hierachie'});
        links.push({label: 'Documents', state: 'documents'});
        links.push({label: 'Produits', state: 'produits'});
        links.push({label: 'Contacts', state: 'contacts'});
        links.push({label: 'Tech', state: 'tech'})
      } else if (role === 'admin') {
        links.push({label: 'Hierarchie', state: 'hierachie'});
        links.push({label: 'Documents', state: 'documents'});
        links.push({label: 'Produits', state: 'produits'});
        links.push({label: 'Contacts', state: 'contacts'});
        links.push({label: 'Admin', state: 'admin'})
      }
    }
    links.push({label: 'Hierarchie', state: 'hierachie'});
    links.push({label: 'Documents', state: 'documents'});
    links.push({label: 'Produits', state: 'produits'});
    links.push({label: 'Contacts', state: 'contacts'});
    links.push({label: 'Marketing', state: 'marketing'})
    console.log('got ', links.length)
    this.items = links;

  }

  goTo(target) {
    this.$state.transitionTo(target);
  }


}

export const menu = {
  template: require('./menu.html'),
  controller: MenuController
};

