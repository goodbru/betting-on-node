const express = require('express');

const app = express();


app.use(express.static('public'));

app.get('/', function (req,res){
  res.send('Hello World!');
});

app.use('/users*', function (req,res,next){
  res.set('Content-Type', 'application/json');
  next();
});

app.get('/users.json', function (req,res){
  res.send(JSON.stringify([{
    id: 1,
    name: 'Ryan'
    }]));
});

app.listen(3000, function(){
  console.log('listening');
});