//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    //create a request object
  var request=new XMLHttpRequest();  
  //capture the response and store in some variable
  request.onreadystatechange=function(){
      if(request.readyState ===  XMLHttpRequest.DONE){
          //take some action
          if(request.status  ===  200){
          //submit name
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    var submit=document.getElementById('submit_btn');
  submit.onclick=function(){
    //Make a request to the server and send the name
    
    //capture the name and render it to a list
    var names=request.responseText;
    var list='';
    for(var i=0;i < names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
    
};
      }
      }
  };
  //Make a request
  request.open('GET','http://sainathrvsn.imad.hasura-app.io/submit-name?name='+ name,true);
  request.send(null);
};
