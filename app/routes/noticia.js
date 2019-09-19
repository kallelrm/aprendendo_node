module.exports = function(app){
     
    app.get('/noticia', function(req, res){

        var connection = app.config.dbConnection();
        let noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.getNoticia(connection, function(error, result){
            res.render("noticias/noticia", {noticia : result});;
        });
    });
};