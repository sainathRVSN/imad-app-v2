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

function createTemplate (data){
var date = data.date;
var content = data.content;
var heading = data.heading;
var title = data.title;

var htmlTemplate =  `<html>
<head>
    <title>
        ${title}
        
        
    </title>
    <meta name="viewport" content="width=device-width,intial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
     
</head>
<body>
    <div class="container">
        
    <div>
        <a href="/">Home</a>
        
    </div>
    <hr/>
    <h3>
        ${heading}
        
    </h3>
    <div>
        ${date}
        
    </div>
    <div>
        
        ${content}
    </div>
    </div>
</body>
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/:articleName', function (req,res){
var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});
var names=[];
app.get('/submit-name',function(req,res){//   /submit-name?name=xxxx
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
console.log('IMAD course app listening on port ${port}!');
});