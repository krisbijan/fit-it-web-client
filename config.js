fitIT.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
        when('/', {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        }).
        when('/new-account', {
            templateUrl: 'templates/new-acc.html',
            controller: 'newAccCtrl'
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
