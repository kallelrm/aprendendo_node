module.exports = function(application){

    application.get('/noticias', function(req,res){

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.getNoticias( function(error, result){
            res.render('noticias/noticias', { noticias : result });
        });

    });
    application.get('/noticia', function(req,res){

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            
            res.render('noticias/noticia', { noticia : result });
        });

    });
}