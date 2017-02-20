*Javascript语言执行环境是"单线程"，虽然实现起来比较简单容易操作，但是坏处是容易造成阻塞。<br>
Javascript提供了"异步模式"去解决上述问题。关于"异步模式"Javascript"提供了一些实现方法：<br>*
>- 回调函数（callbacks) 
>- 事件监听
>- Promise对象 
<br>
## Promise是什么
`promise`是一种**异步方式处理值或者非值**的方法,`promise`是对象，代表一个函数最终可能的返回值或者抛出的异常。<br>
在与远程对象打交道时，`promise`会非常有用，可以把它们看做远程对象的一个代理。<br>
## 使用`promise`的理由
- 使用`promise`可以让我们逃脱回调地狱，使我们的代码看起来像是同步的那样。
- 可以在程序中的任何位置捕捉错误，并且绕过依赖于程序异常的后续代码，获得功能组合和错误冒泡的能力，最重要的是保持了异步运行的能力。
- 使我们的代码的可读性和可维护性都变得更好。
## 在AngularJs中使用`promise`
HTML代码：<br>
```html 
<div ng-app="MyApp">
  <div ng-controller="MyController">
  <label for="flag">成功
  <input id="flag" type="checkbox" ng-modle="flag"/><br/>
  </label>
  <hr/>
  <button ng-click="handle()">点击我</button>
  </div>
</div>
<br>
```
JS代码：<br>
```javascript
angular.module("MyApp",[])
.controller("MyController",["$scope","$q",function($scope,$q){
  $scope.flag=true;
  $scope.handle=function(){
      var deferred = $q.defer();
      var promise = deferred.promise;
      promise.then(function(result){
          alert("Success:"+result)；
      },function(error){
          alert("Fail:"+error);
      });
      if($scope.flag){
          deferred.resolve("You are lucky");
      }else{
          deferred.reject("Sorry,it lost!");
      }
  }
}]);
```
 <code>var deferred = $q.defer()</code>这段代码创建了一个<code>deferred</code>对象，我们然后利用<code>var promise = deferred.promise</code>创建了一个<code>promise</code>对象。<br>
我们给<code>promise</code>的<code>then</code>方法传递了两个处理函数，分别处理当<code>promise</code>被执行的时候以及<code>promise</code>被拒绝的时候所要进行的操作
<br>
**<code>$q</code>的<code>defer()</code>方法创建的对象具有哪些方法：**<br>
 + `resolve(value)`:用来执行`deferred promise`,`value`可以为字符串，对象等。
 + `reject(value)`:用来拒绝`deferred promise`,`value`可以为字符串，对象等。
 + `notify(value)`:获取`deferred promise`的执行状态，然后使用函数来传递它。
 + `then(successFunc,errorFunc,notifyFunc)`:无论`promise`是成功还是失败了，当结果可用之后，`then`都会立刻异步调用`scuccessFunc`,或者`errorFunc`,在`promise`被执行或者拒绝之前，`notifyFunc`
   可能会被调用0到多次，以提供过程状态的提示。
 + `catch(errorFunc)`
 + `finally(callback)`
## 通过使用`then`进行链式请求
我们通过使用`then`方法进行链式调用，这样做的好处是，无论前一个任务或者说`then`函数是被执行或者拒绝了都不会影响后面的`then`函数的运行。

<a href="https://segmentfault.com/a/1190000002788733#articleHeader3">Detail Information</a>