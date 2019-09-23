const {check, validationResult} = require('express-validator')
module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia',{ validacao : {}, noticia : {} });
    });

    // application.post('/noticias/salvar', function(req,res){
    //     let noticia = req.body;

    application.post('/noticias/salvar', [
        check('titulo','Titulo é obrigatório').exists(),
        check('resumo','Resumo é obrigatório').exists(),
        check('autor','Autor é obrigatório').exists(),
        check('resumo','Resumo deve conter entre 10 e 100 caracteres').isLength({min: 10}),
        check('data_noticia','Data é obrigatório').exists(),
        check('noticia', 'A Notícia é obrigatória').exists()
    ],(req,res)=>{
        let noticia = req.body, erros;
        erros = validationResult(req);
        console.log("aaaaaaaaaaaaaaaaaaaaa");
        
        if(!erros.isEmpty()){
            console.log('2222aaaaaaaaaaaaaa');
            
            let arrayErros = erros.mapped();
            let mensagens = arrayErros;
            console.log(arrayErros);
            return res.render('admin/form_add_noticia', {validacao: mensagens, noticia : noticia})
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasDAO(connection);
        console.log('gay');
        

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    })
        
        // req.assert('titulo', 'Título é obrigatório').notEmpty(); 
        // req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        // req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        // req.assert('autor', 'Autor é obrigatório').notEmpty();
        // req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        
        // let erros = req.validationError();
        
        // if(erros){
        //     res.render('admin/form_add_noticia',{validacao: erros, noticia:noticia});
        //     return;
        // }
            
};