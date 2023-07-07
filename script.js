let lotteryNumbers = [];
let firstGame = [7, 14, 35, 48, 51, 60];

// Gera os numeros da mega-sena
for (let index = 0; index < firstGame.length; index += 1) {
   let randomNumber = Math.ceil(Math.random() * 60);
   if (!lotteryNumbers.includes(randomNumber)){
    lotteryNumbers.push(randomNumber);
   } else {
    index -= 1;
   }
   
};

// Comparação do sorteio com o jogo do vito
let count = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {  
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
            count += 1;
            hits.push(lotteryNumbers[indexLottery]);
        }
    }  
}

// QuantidlotteryNumberse acertos
console.log('mega sena:', lotteryNumbers);
console.log('jogo', firstGame);
console.log('acertos', count);
console.log("quais", hits);