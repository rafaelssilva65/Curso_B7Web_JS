/*
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

fruits.sort(); //ordenar os elementos da array em ordem alfabetica.

fruits.reverse(); //inverter os dados. */








// ordenando objetos da array, pela caracterista " year "
let cars = [
    { brand: 'Fiat', year: 2022},
    { brand: 'Bmw', year: 2018},
    { brand: 'Ferrari', year: 2020},
]

cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
})

console.log(cars);

