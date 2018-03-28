fitIT.controller('loginCtrl', function ($scope, $http, $route, $cookies, $location, web_services, $rootScope, $filter, globalData, Notification) {

    $scope.myGlobalData = globalData;

    $scope.checkIfLogged = function (){
        if ($cookies.get("access_token")!= undefined && $cookies.get("access_token") != null){
            Notification.info({ message: "User logged in - forwarding", replaceMessage: true });
        }
    }
    $scope.checkIfLogged();

    $scope.login = function() {
        web_services.oauth2_login($scope.loginData.email, $scope.loginData.password, $scope.loginData.rememberMe).then(function(response){
            if (globalData.access_token!= undefined && globalData.access_token!= null){
                console.log ("LOGGED");
            }
        });
    }

    $scope.register = function() {
        web_services.register($scope.newUserData.email,$scope.newUserData.password,$scope.newUserData.firstName,$scope.newUserData.lastName).then(function(response){
            if (response.data.email==$scope.newUserData.email){
                $("#newUser").modal("hide");
            }
        });
    }

    $scope.forgot = function() {
        web_services.forgotPass($scope.forgotData.email).then(function(response){
            if (response.data.email==$scope.forgotData.email){
                $("#forgetPass").modal("hide");
            }
        });
    }

    $scope.openNewUserModal = function () {
        $("#newUser").modal("show");
    }

    $scope.openForgetPassModal = function () {
        $("#forgetPass").modal("show");
    }

});