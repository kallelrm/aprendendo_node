var http = require('http'); //a função require permite incorporar outros arquivos dentro do arquivo em que se está trabalhando

var server = http.createServer(function(req, res){
    var categoria = req.url; //essa linha recupera a url fornecida no browser

    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de tecnologia</body></html>");
    } else if (categoria == '/moda'){
        res.end("<html><body>Notícias de moda</body></html>");
    } else if (categoria == '/beleza'){
        res.end("<html><body>Notícias de beleza</body></html>");
    } else {
        res.end("<html><body>Portal de notícias</body></html>");
    }
    

});

server.listen(3000); // isso faz com que o servidor http fique escutando na porta 3000
