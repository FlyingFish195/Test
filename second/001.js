var app=angular.module('Weather',[]);
app.factory('WeahterApi',function($http){
    var obj={};
    obj.getIP = function(){
        return $http.jsonp()
    }
});