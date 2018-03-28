fitIT.service('globalData', function ($cookies, $location) {

    var _checkIfLogged = function () {

        if ($cookies.get("access_token") != null && $cookies.get("access_token") != undefined && $cookies.get("access_token") != "null"){
            console.log("access_token CHANGED");
            this.access_token = $cookies.get("access_token");
        }

        if ($cookies.get("refresh_token") != null && $cookies.get("refresh_token") != undefined && $cookies.get("refresh_token") != "null"){
            console.log("refresh_token CHANGED");
            this.refresh_token = $cookies.get("refresh_token");
        }
        var loggedIn = (this.access_token != undefined && this.access_token != null && this.access_token != "null");

        if (loggedIn) {
            $location.path("/main");
        } else {
            $location.path("/login");
        }
    }

    var _access_token = null;   
    var _refresh_token = null;
    var _webSite = "http://localhost:8080";
    var _oauth2Server = "http://localhost:8090";
    

    this.webSite = _webSite;
    this.refresh_token = _refresh_token;
    this.access_token = _access_token;
    this.oauth2Server = _oauth2Server;
    this.checkIfLogged = _checkIfLogged;

});