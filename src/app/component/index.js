import angular from 'angular';

import {home} from './home/home';
import {menu} from './menu/menu';

export const componentsModule = 'components';

angular
  .module(componentsModule, [])
  .component('menu', menu)
  .component('home', home);
