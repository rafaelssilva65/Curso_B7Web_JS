//É uma forma simplificada de fazer a função

let somar = (x, y) => {
  return x + y;
};

//forma mais simplificada de fazer o arrow, sem return
let somarr = (x, y) => x + y;
//ja retorna, altomaticamente o resultado para a função (return)

//exemplo de aroow com um parametro só, mais simplificado
let nome = (nome1) => nome1 + "silva";

let subtrair = (x, y, b) => {
  return x - y - b;
};

console.log(subtrair(10, 1, 2));
