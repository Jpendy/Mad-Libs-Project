
//This is where we get all the inputs by their 'id'
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

//this is where we get all the spans by their 'id'
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

//this is where we get the madLib text by it's 'id'
const madLib = document.getElementById('madLib');

//this is where we get the spans all together in a class by their class name.
//I used this to make the spans display bold in the mad lib

//this is where I get the button by it's 'id'
const myButton = document.getElementById('myButton');

const theEnd = document.getElementById('the-End');

const leoBed = document.getElementById('leoBed');

const resetButton = document.getElementById('reset-button');

const counter = document.getElementById('counter');

let counterSum = 1;



//this is where our button is connected to the function that adds all the values
//from the inputs and places them into the spans
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

    //This is the part that makes my mad lib "appear" when the button is clicked
    madLib.style.display = 'block';
    
    //this is the part that makes the bold styling appear on the spans when the button is clicked
   // spanClass.style.visibility = 'visible';

    theEnd.style.display = 'block';

    leoBed.style.display = 'block';

    leoBed.style.visibility = 'visible';
    theEnd.style.visibility = 'visible';

    counter.textContent = counterSum;
    counterSum++;

    let ul = document.getElementById('ul');
    ul.style.display = 'none';

});


//This is the reset button code
resetButton.addEventListener('click', function(){
    nounOneInput.value = ' ';
    nounTwoInput.value = ' ';
    nounThreeInput.value = ' ';
    nounFourInput.value = ' ';

    verbOneInput.value = ' ';
    verbTwoInput.value = ' ';
    verbThreeInput.value = ' ';
    verbFourInput.value = ' ';

    adjectiveOneInput.value = ' ';
    adjectiveTwoInput.value = ' ';
    adjectiveThreeInput.value = ' ';
    adjectiveFourInput.value = ' ';

    madLib.style.display = 'none';
    theEnd.style.visibility = 'hidden';
    leoBed.style.visibility = 'hidden';

    let ul = document.getElementById('ul');
    ul.style.display = 'block';

    ul.style.display = 'flex';
    ul.style.flexWrap = 'wrap';
     
    // madLib.style.display = 'none';
    // theEnd.style.visibility = 'none';
    // leoBed.style.visibility = 'none';
});


