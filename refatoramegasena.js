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

