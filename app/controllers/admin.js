// module.exports.formulario_inclusao_noticia = (application, req, res) =>{
//     res.render('admin/form_add_noticia',{ validacao : {}, noticia : {} });
// };

// module.exports.noticias_salvar = function(application, (req, res)){ 
//         let noticia = req.body, erros;
//         erros = validationResult(req);
//         console.log("aaaaaaaaaaaaaaaaaaaaa");
        
//         if(!erros.isEmpty()){
//             console.log('2222aaaaaaaaaaaaaa');
            
//             let arrayErros = erros.mapped();
//             let mensagens = arrayErros;
//             console.log(arrayErros);
//             return res.render('admin/form_add_noticia', {validacao: mensagens, noticia : noticia})
//         }

//         var connection = application.config.dbConnection();
//         var noticiasModel = new application.app.models.noticiasDAO(connection);
//         console.log('gay');
        

//         noticiasModel.salvarNoticia(noticia, function(error, result){
//             res.redirect('/noticias');
//         });
//     }
// }