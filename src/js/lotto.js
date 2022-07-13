let btn = document.querySelector('button');
let output = document.querySelector('#output');

let btnOne = document.querySelector('#btnOne');
let outputOne = document.querySelector('#outputOne');

let btnTwo = document.querySelector('#btnTwo');
let outputTwo = document.querySelector('#outputTwo');

let blaArray = []
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let generatedNumbersArray = [];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start, end) {
    let myArray = [];
    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

btn.addEventListener('click', () => {

    if (numbersArray.length !== 0) {
        let randomIndex = getRandomNumber(0, numbersArray.length - 1);

        let randomNumber = numbersArray[randomIndex];
        numbersArray.splice(randomIndex, 1)
        blaArray.push(randomNumber);

        output.innerText = blaArray;
    } else {
        output.innerText = `${blaArray} \n No More Random Numbers`;
        return;
    }
});

/* function createArrayOfRandomNumbersEasy() {

    let numbersArray = createArrayOfNumbers(1, 25);
    for (let i = 1; i <= 15; i++) {
        let randomIndex = getRandomNumber(0, numbersArray.length - 1);
        let randomNumber = numbersArray[randomIndex];
        numbersArray.splice(randomIndex, 1)
        generatedNumbersArray.push(randomNumber);
        outputTwo.innerText = JSON.stringify(generatedNumbersArray);
    }
    generatedNumbersArray = [];
} */

function createArrayOfRandomNumbers(maxNumber, range) {

    let numbersArray = createArrayOfNumbers(1, maxNumber);
    let listGenerated = [];
    for (let i = 1; i <= range; i++) {
        let randomIndex = getRandomNumber(0, numbersArray.length - 1);
        let randomNumber = numbersArray[randomIndex];
        numbersArray.splice(randomIndex, 1)
        generatedNumbersArray.push(randomNumber);
        listGenerated = JSON.stringify(generatedNumbersArray);
    }
    return listGenerated
}

function handleRolling(outputId = outputTwo, maxNumber = 25, range = 15) {

    outputId.innerText = createArrayOfRandomNumbers(maxNumber, range)
    generatedNumbersArray = [];
}
btnTwo.addEventListener('click', () => handleRolling());

btnOne.addEventListener('click',
    () => handleRolling(outputId = outputOne, maxNumber = 60, range = 6));
