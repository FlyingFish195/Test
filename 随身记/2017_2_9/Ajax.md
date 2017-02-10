## Steps of AJAX Operation
- A client event occurs.
- An XMLHttpRequest object is created.
```javascript
function ajaxFunction(){
   var ajaxRequest;  // The variable that makes Ajax possible!
   try{
      // Opera 8.0+, Firefox, Safari
      ajaxRequest = new XMLHttpRequest();
   }catch (e){
   
      // Internet Explorer Browsers
      try{
         ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
      
         try{
            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
      
            // Something went wrong
            alert("Your browser broke!");
            return false;
         }
      }
   }
  }
```
- The XMLHttpRequest objext is configured.
- The XMLHttpRequest objext makes an asynchronous request to the Webserver.
- The Webserver returns the result containing XML document.
- The XMLHttpRequest object calls the callback() function and processes the result.
- The HTML DOM　is updated.

[Detail Information](https://www.tutorialspoint.com/ajax/ajax_in_action.htm)