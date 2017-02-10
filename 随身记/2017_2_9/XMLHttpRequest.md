## XMLHttpRequest
1. JavaScript object that performs asynchronous interaction with the server.

2. The XMLHttpRequest object is the key to AJAX.It is an API that can be used by JavaScript,JScript,VBScript,
   and other web browser scripting languages to transfer and manipulate XML data to from a webserver using HTTP,
   establishing an independent connection channel between a webpage's Client-Side and Server-Side.

3. The data returned from XMLHttpRequest calls with often be provided by back-end databases.Beside XML,
   XMLHttpRequest can be used to fetch data in other formats,e.g. JSON or even plain text.


***some of the methods and properties of the XMLHttpRequest***
## XMLHttpRequest methods

- **abort()**
  Cancels the current request.

- **getAllResponseHeaders()**
  Returns the complete set of HTTP headers as a string.

- **getResponseHeader(headerName)**
  Returns the value of the specified HTTP header.

- **open(method,URL)**<br>
  **open(method,URL,async)**<br>
  **open(method,URL,async,userName)**<br>
  **open(method,URL,async,username,password)**<br>
  Specifies the method, URL, and other optional attributes of a request.

  The method parameter can have a value of "GET", "POST", or "HEAD". Other HTTP methods, such as "PUT" and "DELETE" (primarily used in REST applications) may be possible.

  The "async" parameter specifies whether the request should be handled asynchronously or not. "true" means that the script processing carries on after the send() method without waiting for a response, and "false" means that the script waits for a response before continuing script processing.

- **send(content)**
  Sends the request.

- **setRequestHeader()**<br>
  Adds a label/value pair to the HTTP header to be sent.

## Porperties

- **onreadystatechange**<br>
  An event handle for an event that fires at every state change.

- **readyState**<br>
  The readyState property defines the current state of the XMLHttpRequest object.

  The following table provides a list of the possible values for the readyState property:<br>

  <table>
    <tr>
       <th>0</th>
       <th>The request is not initialized.
    </tr>
    <tr>
       <th>1</th>
       <th>The request has been set up.</th>
    </tr>
    <tr>
       <th>2</th>
       <th>The request has been sent.</th>
    </tr>
    <tr>
       <th>3</th>
       <th>The request is in process.</th>
    </tr>
    <tr>
       <th>4</th>
       <th>The request is completed.</th>
    </tr>
  </table>

- **responseText**<br>
   Returns the response as a string.

- **responseXML**<br>
   Returns the response as XML.This property returns an XML documet object,which can be examined and parsed using the W3C DOM node tree methods and properties.

- **status**<br>
   Returns the status as a number.

- **statusText**<br>
   Returns the status as a string.

   [Detail Information](https://www.tutorialspoint.com/ajax/what_is_xmlhttprequest.htm)<br>
   [XMLHttpRequest详解](https://segmentfault.com/a/1190000004322487)