## 服务
 **AngularJS中的服务其实就是提供一种方式抽取共用类库**<br><br>
 比如说一些工具类方法，我们传统的做法就是自己写个 utility 类，把相关的工具方法填充到utility里面去，最后把utility类放到一个全局的变量中，这样任何地方都可以调用utility的方法。如果用AngularJS的service，你按照他的规则创建一个 utility 服务，然后在任何地方都可以通过依赖注入调用utility里面的方法。<br>
 Angular的创建服务的方式有三种：provider，factory，service.

***controller这一层应该很薄；也就是说，应用里大部分的业务逻辑和持久化数据都应该放到service里。出于内存性能的考虑，controller只在需要的时候才会初始化，一旦不需要就会被抛弃。因此，每次当你切换或刷新页面的时候，Angular会清空当前的controller.与此同时，service
可以用来永久保存应用的数据，并且这些数据可以在不同的controller之间使用***<br>

## 供应商
1. **factory**<br>
   用factory就是创建一个对象，为它添加属性，然后把这个对象返回出来。把service传进
   controller之后，在controller里这个对象里的属性就可以通过factory使用了。
   ```javascript
   app.controller('myFactoryCtrl',function($scope,myFactory){
       $scope.artist = myFactory.getArtist();
   });
   app.factory('myFactory',function(){
       var _artist='';
       var service={};

       service.getArtist=function(){
           return _artist;
       }
       return service;
   });
   ```
*factory是创建和配置服务最常见的方式。只需要创建一个对象，为它添加属性，然后返回这个对象就可以了。当将factory传进controller中，对象的这些属性就可以通过factory访问。*

2. 
