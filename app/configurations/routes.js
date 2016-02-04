export default function routesConfig ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'WordListController',
      controllerAs: 'ctrl'
    })

    .when('/new', {
      templateUrl: 'views/new.html',
      controller: 'WordNewController',
      controllerAs: 'ctrl'
    })

    .when('/play/:id', {
      templateUrl: 'views/play.html',
      controller: 'WordPlayController',
      controllerAs: 'ctrl'
    })

    .when('/about', {
      template: '<h2>About</h2>'
    })

    .otherwise({
      redirectTo: '/'
    })
}
