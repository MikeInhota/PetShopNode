const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http.createServer((req, res) => {
    // quando faço requisição no navegador
    res.writeHead(200, {"content-type": "text/plain; charset=utf-8"});
    let urlCompleta = url.parse(req.url, true); // o true retorna o parse em um objeto
    let queryString = urlCompleta.query; //a query é a parte dos parametros
    let rota = urlCompleta.pathname; // ex: pets/add

    // console.log(queryString);

    switch(rota){
        case "/pets":
        let conteudo = petshop.listarPets();
        if(conteudo.length > 0){
            res.write(conteudo);
        } else {
            res.write("nenhum pet cadastrado :(")
        }
                res.write("lista de pets")
        break;

        case "/pets/add":
        let novoPet = queryString;
        if(petshop.adicionarPet(novoPet)) {
            res.write(`${novoPet.nome} foi adicionado a nossa lista!`);
        } else {
            res.write("ops, algo deu errado!");
        }
        break;

        case "/pets/buscar":
        let nomePet = queryString.nome;
        let petsEncontrados = petshop.buscarPet(nomePet);
        if(petsEncontrados.length >0) {
            res.write(`Encntramos ${petsEncontrados.length} com o nome ${nomePet}.`);
        } else {
            res.write(`Ops, nenhum pet cadastrado com esse nome! :(`);
        }
        break;

        default:
        res.write("tô perdido");
    }
//req = requeste e res = responses
    res.end();
}).listen(3000, "localhost", () =>{
    // quando ligo o servidor
    console.log("Servidor rodando :)")
});