fitIT.controller('mainCtrl', function ($scope, $http, $route, $cookies, $location, web_services, Notification, $rootScope, $filter, globalData) {

    globalData.checkIfLogged();

    $scope.init = function () {

    }
    $scope.init();

    $scope.signOut = function () {
        $cookies.put("access_token", null);
        $cookies.put("refresh_token", null);
        globalData.access_token = null;
        globalData.refresh_token = null;
        globalData.checkIfLogged();
    }
});