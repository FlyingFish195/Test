var app=angular.module('Weather',[]);
app.factory('WeatherApi',function($http){
    var obj={};
    obj.getIP = function(){
        return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
    }
    obj.getCurrent = function(ip){
        var api="http://v.juhe.cn/weather/ip?format=1"; 
        var APPKey="&key=47f4bdd330534e7917a3cc2c756e5078&ip=";
        var cb="&callback=JSON_CALLBACK";
        return $http.jsonp(api+APPKey+ip+cb);
    };
    return obj;
});
app.controller('MainCtrl',function($scope,WeatherApi){
    $scope.Data={};
    WeatherApi.getIP().success(function(data){
        var ip=data.ip;
        WeatherApi.getCurrent(ip).success(function(data){
            $scope.Data=data.result;
            $scope.items=data.result.future;
            delete $scope.items[Object.keys($scope.items)[0]];
        });
    });
});