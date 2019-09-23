const {check, validationResult} = require('express-validator/check');

module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia', {validacao: {}});
    });

    application.post('/noticias/salvar', function(req,res){
        /*express.post('noticias/salvar', [
            check('titulo','Titulo é obrigatório').exists(),
            check('resumo','Resumo é obrigatório').exists(),
            check('resumo','Resumo deve conter entre 10 e 100 caracteres'),
            check('autor','Autor é obrigatório').exists(),
            check('data_noticia','Data é obrigatório').exists(),
            check('noticia', 'A Notícia é obrigatória').exists()
        ],(req,res)=>{
            let conteudo, mysql, noticiasModel, erros;
            erros = validationResult(req);
            if(!erros.isEmpty()){
                let arrayErros = erros.mapped();
                let mensagens = arrayErros;
                console.log(arrayErros);
                return res.render('admin/form_add_noticia')
            }
        })*/
        var noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        
        let erros = req.validationError();
        
        if(erros){
            res.render('admin/form_add_noticia');
            return;
        }
            
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });

    });
}