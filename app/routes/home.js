module.exports = function(app){
    app.get('/', function(req, res){ //funções nesse estilo são as rotas, req é a requisição do usuário e res é a resposta do servidor
        res.render("home/index"); //conteúdo do retorno do servidor
    });
}