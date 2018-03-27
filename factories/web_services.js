fit_it.factory('web_service', function ($http, $window, dataContainer, $filter, Notification) {
    return {
        oauth2_login: function () {
            return $http.get('/SystemsDatabase/api/system/initialize', {
            }).then(function (response) {
                dataContainer.systemInitData = response.data;
                // success
                return response.data;
            }, function errorCallback(response) {

            });
        }
    }
});