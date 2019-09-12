var express = require('express');
var consign = require('consign');

var app = express(); // a variável var recebe a função express sendo executada e será usada conforme requisitada
app.set('view engine', 'ejs'); //essa linha define o motor de visualização do express como o ejs
app.set('views', './app/views'); // define o caminho das views

consign().include('app/routes').into(app);

module.exports = app;
