
//Função sem parâmetro
function gravidade() {
    console.log("A gravidade do planeta é:");
};

//Chamar a função
gravidade();

//função com parâmetro
function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
};

somar(1,2);


//função com retorno, return 

function nomeCompleto(nome, sobrenome) {
    return nome + sobrenome;
}

let completo = nomeCompleto("Rafael ", "Silva");
console.log(completo);


// retorno condicional

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 18;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}


//desafio de função


function validar(usuario, senha) {
    if (usuario == "Pedro" && senha == "1234") {
        return true;
    } else 
    return false;
}

let usuario = "Pedro";
let senha = "1234a";

let validacao = validar(usuario, senha);

if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}



// EXERCICIOS

/*function calculaImovel(metragrem, quartos) {

    if (quartos == 1) {
        3000 * metragrem
        return 
    } else if( quartos == 2) { 
        3000 * metragrem
        return 
    } else if(quartos ==3) {
        3000 * metragrem
        return 
    }
};


let preco = calculaImovel(123, 3);
console.log(`A casa custa R$ ${preco}`); 

let usuario = "Pedro";
let senha = "1234a";

let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}

function validar(usuario, senha) {
    if (usuario == "Pedro" && senha == "1234") {
        return true;
    } else 
    return false;
}
*/







  


