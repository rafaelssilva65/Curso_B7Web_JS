// for simples 

for(let n = 0; n < 10; n++){
    document.write("olá <br>");
    console.log("frase");
} 


 /*loop em array

let cores = ['preto', 'branco', 'azul', 'vermelho',];
cores.push('verde'); // empurrar mais um dado na array

for (let n = 0; n < cores.length; n++) {
  
    console.log(cores[n]);
    document.write(cores[n]);
} */


//outra formas de fazer

/*let cores = ['preto', 'branco', 'azul', 'vermelho',];
cores.push('verde'); 
for(let i in cores) {
    console.log(cores[i]);
} */



let cores = [
    { nome: 'preto', qt: 10 },
    { nome: 'azul', qt: 5},
    { nome: 'vermelho', qt: 15}
];

for(let cor of cores) {
    console.log(`nome: ${cor.nome} - ${cor.qt}`);
}









