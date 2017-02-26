var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
    title:'first article sainath',
    heading:'article one',
    date:'26 mar 2017',
    content:`<p>create a project create a project create a project create a project create a projectcreate a projectcreate a projectcreate a projectcreate a projectcreate a project create a projectcreate a project create a project create a project</p>`
},
  'article-two':{
    title:'second article sainath',
    heading:'article two',
    date:'26 mar 2017',
    content:`<p>create a project create a project create a project create a project create a projectcreate a projectcreate a projectcreate a projectcreate a projectcreate a project create a projectcreate a project create a project create a project</p>`
},

'article-three':{
    title:'third article sainath',
    heading:'article three',
    date:'26 mar 2017',
    content:`<p>create a project create a project create a project create a project create a projectcreate a projectcreate a projectcreate a projectcreate a projectcreate a project create a projectcreate a project create a project create a project</p>`
}
};

function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=
`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="'width-device-width',initial-scale=1"/>
       <link rel="stylesheet" href="ui/style.css"> 
    </head>
    <body>
        <div class="container">
        <div>
        <a href='/'>home</a>
        <hr>
        <h3>${heading}</h3>
        <div>
        ${date}
        </div>
        ${content}
        </div>
        </div>
    </body>
</html>
`;
return(htmltemplate);
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req,res){
  var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/style.css',function(req,res){
    res.sendfile(path.join(__dirname,'ui','style.css'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
