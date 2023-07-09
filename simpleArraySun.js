//somando elementos de uma array


const simpleArraySun = (array) => {
    let sum = 0
    
    for (let index = 0; index < array.length; index +=1) {
     sum += array[index];
    }
    return sum;
}


console.log(simpleArraySun([3, 4, 8, 10]));

