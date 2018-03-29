fitIT.controller('mainCtrl', function ($scope, $http, $route, $cookies, $location, web_services, Notification, $rootScope, $filter, globalData) {

    $scope.init = function () {
        globalData.checkIfLogged();
        web_services.getUserData();
    }
    $scope.init();

    $scope.signOut = function () {
        web_services.oauth2_logout().then(function (response) {
            if(response!=undefined && response.status==200){
                $cookies.put("access_token", null);
                $cookies.put("refresh_token", null);
                globalData.access_token = null;
                globalData.refresh_token = null;
                globalData.checkIfLogged();
            }
        });
    }
});