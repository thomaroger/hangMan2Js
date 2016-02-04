import angular from 'angular'
import ngRoute from 'angular-route'

import routesConfig from './configurations/routes'

//directives
import GravatarDirective from './directives/GravatarDirective'

//components
import KeyboardComponent from './components/KeyboardComponent'

// services
import { WordsService, StarifyFilter } from './services/WordsService'

// controllers
import WordListController from './controllers/WordListController'
import WordNewController from './controllers/WordNewController'
import WordPlayController from './controllers/WordPlayController'

angular.module('iadApp', [
  ngRoute
])

.service('WordsService', WordsService)

.controller('WordListController', WordListController)
.controller('WordNewController', WordNewController)
.controller('WordPlayController', WordPlayController)
.filter('starify', StarifyFilter)
.directive('gravatar', GravatarDirective)
.component('keyboard', KeyboardComponent)
.config(routesConfig)
