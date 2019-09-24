module.exports.noticias = (application, req, res) =>{
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias( function(error, result){
        res.render('noticias/noticias', { noticias : result });
    });

}

module.exports.noticia = (application, req, res) =>{
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    let id = req.query;

    noticiasModel.getNoticia(id, function(error, result){
        
        res.render('noticias/noticia', { noticia : result });
    });
}