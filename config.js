fitIT.config(['$routeProvider',function($routeProvider, $cookies) {
  $routeProvider.
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        }).
        when('/main', {
            templateUrl: 'templates/main.html',
            controller: 'mainCtrl'
        });
}]);

fitIT.config(function (NotificationProvider) {
    NotificationProvider.setOptions({
        delay: 4000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'center',
        positionY: 'top'
    });
});
