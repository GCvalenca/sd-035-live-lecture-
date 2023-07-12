// crie função que retorne um array de forma crescente

// const sortNumbers = (array) => {
//     let temp;

//     for (let index = 0; index < array.length; index += 1) {
//         for (let compare = index + 1; compare < array.length; compare += 1) {
//             if (array[index] > array[compare]) {
//                 temp = array[index];
//                 array[index] = array[compare];
//                 array[compare] = temp;
//             }
//         }
//     }
//     return array
// }

//console.log(sortNumbers([3, 32, 42, 22, 2, 45, 9, 18]));



//MODELO EM UMA LINHA SÒ

const numberDelicia = (array) => array.sort((a, b) => a - b);

console.log(numberDelicia([7, 14, 85, 24, 1, 5]));