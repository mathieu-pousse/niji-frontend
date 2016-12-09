import angular from "angular";
import {techsModule} from "./app/techs/index";
import {componentsModule} from "./app/component/index";
import "angular-ui-router";
import "angular-material";
import "angular-animate";
import "angular-aria";
import routesConfig from "./routes";
import {main} from "./app/main";
import {login} from "./app/login";
import {header} from "./app/header";
import {title} from "./app/title";
import {AuthenticationService} from "./app/service/authentication/authentication.service";
import {AuthenticationInterceptor} from "./app/service/authentication/authentication.interceptor";
import {JWTTokenService} from "./app/service/authentication/jwttoken.service";
import {Base64Service} from "./app/service/utils/base64.service";
import "./index.scss";

angular
  .module('app', [techsModule, componentsModule, 'ui.router', 'ngMaterial'])
  .config(routesConfig)
  .service('authenticationInterceptor', AuthenticationInterceptor)
  .config(($httpProvider) => {
    $httpProvider.interceptors.push('authenticationInterceptor');
  })
  .service('jwtTokenService', JWTTokenService)
  .service('authenticationService', AuthenticationService)
  .service('base64Service', Base64Service)
  .component('app', main)
  .component('login', login)
  .component('fountainHeader', header)
  .component('fountainTitle', title)

  .run(function ($transitions) {
    $transitions.onStart({
      to: (state) => state.notAuthenticated !== true
    }, function (trans) {
      if (!trans.injector().get('authenticationService').isAuthenticated()) {
        return trans.injector().get('$state').target('login');
      }
      return true;
    });
  });
