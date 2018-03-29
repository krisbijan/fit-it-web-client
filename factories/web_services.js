fitIT.factory('web_services', function ($http, $httpParamSerializer, $window, globalData, $filter, $cookies, Notification) {
    return {

        oauth2_login: function (email, password, rememberMe) {

            var data = {
                grant_type: "password",
                username: email,
                password: password,
                scopes: "read write"
            };
            var encoded = btoa("myclientapp:9999");
            return $http({
                method: 'POST',
                url: globalData.oauth2Server + '/oauth/token',
                headers: {
                    "Authorization": "Basic " + encoded,
                    "Content-type": "application/x-www-form-urlencoded"
                },
                data: $httpParamSerializer(data)
            }).then(function (response) {

                globalData.access_token = response.data.access_token;
                globalData.refresh_token = response.data.refresh_token;
                

                if (rememberMe) {
                    $cookies.put("access_token", response.data.access_token);
                    $cookies.put("refresh_token", response.data.refresh_token);
                }

            }, function errorCallback(response) {
                Notification.error({ message: "Error logging in!", replaceMessage: true });
            });
        },


        oauth2_logout: function () {

 
            return $http({
                method: 'GET',
                url: globalData.oauth2Server + '/oauth/revoke-token',
                headers: {
                    "Authorization": "Bearer " + globalData.access_token
                }
            }).then(function (response) {
                return response;
            }, function errorCallback(response) {
                Notification.error({ message: "Error logging out!", replaceMessage: true });
            });
        },


        register: function (email, password, firstName, lastName) {
            return $http({
                method: 'POST',
                url: globalData.oauth2Server + '/register?password=' + password,
                headers: {
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    first_name: firstName,
                    email: email,
                    last_name: lastName
                })
            }).then(function (response) {
                Notification.success({ message: "User registered!", replaceMessage: true });
                return response;
            }, function errorCallback(response) {
                Notification.error({ message: "Error registering!", replaceMessage: true });
            });
        },


        forgotPass: function (email) {
            return $http({
                method: 'GET',
                url: globalData.oauth2Server + '/resetPWD',
                headers: {
                    "Content-type": "application/json"
                },
                params: {
                    email: email
                }
            }).then(function (response) {

                if (response.data.email == email)
                    Notification.success({ message: "New password request sent!", replaceMessage: true });
                else
                    Notification.error({ message: "Error reseting password!", replaceMessage: true });

                return response;
            }, function errorCallback(response) {
                Notification.error({ message: "Error reseting password!", replaceMessage: true });
            });
        },


        getUserData: function () {
            return $http({
                method: 'GET',
                url: globalData.webSite + '/user',
                headers: {
                    "Authorization": "Bearer " + globalData.access_token
                }
            }).then(function (response) {

                globalData.userData = response.data;
                console.log (globalData.userData);
                return response;
            }, function errorCallback(response) {
                Notification.error({ message: "Error getting user data!", replaceMessage: true });
            });
        }
    }
});