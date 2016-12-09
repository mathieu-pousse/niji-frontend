import angular from 'angular';

import {home} from './home/home';

export const componentsModule = 'components';

angular
  .module(componentsModule, [])
  .component('home', home);
