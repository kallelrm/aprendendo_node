var app = require('./config/server');

var rotaNoticias = require ('./app/routes/noticias'); //recebe a função que renderiza a página da aplicação
rotaNoticias(app); // invoca a função recebida na require da linha acima

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
rotaFormularioInclusaoNoticia(app);

app.listen(3000, function(){ //função callback pra abrir a porta 3000 e ficar escutando
    console.log(`Servidor ON`);
});

