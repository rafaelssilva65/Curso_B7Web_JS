// AULA MANIPULAÇÃO DE ELEMENTOS 1
/*
function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    ul.children[0].innerHTML = "item <strong>alterado</strong>!";
} */


//children - retorna uma array do que tem dentro do elemento.
//innerHTML - altera o elemento, ou adiciona algo nele.

//AULA MANIPULAÇAO DE ELEMENTOS 2

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newLi = document.createElement("li");
    newLi.innerHTML = "Item adcionado";

    ul.appendChild(newLi); //appendChild - insere no final um novo elementp (li)
    //prepend - insere no começo.
} 





