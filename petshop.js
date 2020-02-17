let pets = [{nome: "doug"}, { nome: "costelinha" }];

const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo+= `
        --------------------
        nome: ${pet.nome}
        -------<->----------`;
    }
    return conteudo;
};

const adicionarPet = novoPet => {
    return pets.push(novoPet);
};

const buscarPet = nomePet =>{
   let petsEncontrados = "" ;
        return false   
};

module.exports = { listarPets, adicionarPet };