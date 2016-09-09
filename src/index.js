import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {login} from './app/sections/login';
import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import {AuthenticationService} from './app/services/AuthenticationService';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .service('authenticationService', AuthenticationService)
  .component('app', main)
  .component('loginSection', login)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
