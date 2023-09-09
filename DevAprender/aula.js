//Objetos:
//let pessoa = {
    //nome: 'Pedro',
    //idade: 26,
    //estaAprovado: true,
    //sobrenome: 'Vaz'
    //};
//console.log (pessoa)

//Arrays:
//let casa = ['Pedro', 'Victor', 'Remy', 205];
//console.log (casa.length);
//console.log (casa[2]);

//Functions: Devem ser fetias com um verbo + substântivo (ex: resetaCor)
//let corSite = "azul";
//function resetaCor(){
//    corSite = "";
//};

//console.log(corSite);
//resetaCor();
//console.log(corSite);

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("vermelho","claro");
console.log(corSite);

