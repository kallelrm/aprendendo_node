var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser')

var app = express(); // a variável var recebe a função express sendo executada e será usada conforme requisitada
app.set('view engine', 'ejs'); //essa linha define o motor de visualização do express como o ejs
app.set('views', './app/views'); // define o caminho das views

app.use(bodyParser.urlencoded({extended: true}));


consign().include('app/routes')
         .then('config/dbConnection.js')
         .then('app/models')
         .into(app); // essa linha faz o consign reconhecer os arquivos que deve
                     // incluir e insere isso na instanciação do servidor

module.exports = app;
