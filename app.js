const nounOneInput = document.getElementById('nounOne');
const nounTwoInput = document.getElementById('nounTwo');
const nounThreeInput = document.getElementById('nounThree');
const nounFourInput = document.getElementById('nounFour');

const verbOneInput = document.getElementById('verbOne');
const verbTwoInput = document.getElementById('verbTwo');
const verbThreeInput = document.getElementById('verbThree');
const verbFourInput = document.getElementById('verbFour');

const adjectiveOneInput = document.getElementById('adjectiveOne');
const adjectiveTwoInput = document.getElementById('adjectiveTwo');
const adjectiveThreeInput = document.getElementById('adjectiveThree');
const adjectiveFourInput = document.getElementById('adjectiveFour');


const nounOneSpan = document.getElementById('nounOneSpan');
const nounTwoSpan = document.getElementById('nounTwoSpan');
const nounThreeSpan = document.getElementById('nounThreeSpan');
const nounFourSpan = document.getElementById('nounFourSpan');

const verbOneSpan = document.getElementById('verbOneSpan');
const verbTwoSpan = document.getElementById('verbTwoSpan');
const verbThreeSpan = document.getElementById('verbThreeSpan');
const verbFourSpan = document.getElementById('verbFourSpan');

const adjectiveOneSpan = document.getElementById('adjectiveOneSpan');
const adjectiveTwoSpan = document.getElementById('adjectiveTwoSpan');
const adjectiveThreeSpan = document.getElementById('adjectiveThreeSpan');
const adjectiveFourSpan = document.getElementById('adjectiveFourSpan');


const madLib = document.getElementById('madLib');

const spanClass = document.getElementsByClassName('spanClass');


const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(){

    nounOneSpan.textContent = nounOneInput.value;
    nounTwoSpan.textContent = nounTwoInput.value;
    nounThreeSpan.textContent = nounThreeInput.value;
    nounFourSpan.textContent = nounFourInput.value;

    verbOneSpan.textContent = verbOneInput.value;
    verbTwoSpan.textContent = verbTwoInput.value;
    verbThreeSpan.textContent = verbThreeInput.value;
    verbFourSpan.textContent = verbFourInput.value;

    adjectiveOneSpan.textContent = adjectiveOneInput.value;
    adjectiveTwoSpan.textContent = adjectiveTwoInput.value;
    adjectiveThreeSpan.textContent = adjectiveThreeInput.value;
    adjectiveFourSpan.textContent = adjectiveFourInput.value;

    madLib.style.visibility = 'visible';
    
    spanClass.style.visibility = 'visible';
    

});