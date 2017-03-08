//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    //create a Http request
  var request=new XmlHttpRequest();  
  //capture the response and store in some variable
  request.onreadystate=function(){
      if(request.readyState ===  XmlHttpRequest.DONE){
          //take some action
          if(request.status  ===  200){
          var counter=request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
      }
      }
  };
  //Make a request
  request.open('GET','http://sainadhrvsn.imad.hasura-app.io/counter',true);
  request.send(null);
};