// crie uma função que retorne  o maior e o menor  numero de uma array

const BiggestSmallerNumber = (array) => {
    let bigger = array[0];
    let smaller = array[0];

    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > bigger) {
            bigger = array[index];
        }else if (array[index] < smaller) {
            smaller = array[index];
        }
    }

    return `Maior ${bigger}
Menor ${smaller}`;
};

console.log(BiggestSmallerNumber ([ 2, 3, 4, 5, 2, 10, 4, 13, 5]));
