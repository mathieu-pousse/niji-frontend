import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';

import routesConfig from './routes';

import {main} from './app/main';
import {login} from './app/login';
import {header} from './app/header';
import {title} from './app/title';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router', 'ngMaterial'])
  .config(routesConfig)
  .component('app', main)
  .component('login', login)
  .component('fountainHeader', header)
  .component('fountainTitle', title);
