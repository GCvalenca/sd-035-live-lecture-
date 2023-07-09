let lotteryNumbers = [];
let firstGame = [23, 29, 57, 44, 13, 60];

// Gera os numeros da mega-sena
const generateLotteryNumbers = (quantiti, maxNumber, array) => {
    for (let index = 0; index < quantiti; index += 1) {
       let randomNumber = Math.ceil(Math.random() * maxNumber);
       if (!array.includes(randomNumber)){
        array.push(randomNumber);
       } else {
        index -= 1;
       }
    };
}
generateLotteryNumbers (6, 60, lotteryNumbers);
console.log(lotteryNumbers);

// // Comparação do sorteio com o jogo do vito
// let count = 0;
// let hits = [];

// for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {  
//     for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
//         if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
//             count += 1;
//             hits.push(lotteryNumbers[indexLottery]);
//         }
//     }  
// }

// // QuantidlotteryNumberse acertos
// console.log('jogo', firstGame);
// console.log('acertos', count);
// console.log("quais", hits);