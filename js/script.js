/*----- constants -----*/
// Model

/*----- app's state (variables) -----*/
let calculator;
let userInput = '';
/*----- cached element references -----*/
const $calculatorEl = $('#calculator');
const $calcBtnEls = $('.calcBtn');
const $input = $('#input');
const $resultEl = $('#result');
const $clearEl = $('#reset');
/*----- event listeners -----*/
$calcBtnEls.on('click', handleInput);
$resultEl.on('click', handleResult);
$clearEl.on('click', render);
/*----- functions -----*/
function handleInput(event) {
    userInput += event.target.dataset.index;
    $($input).attr('value', userInput);
}

function handleResult() {
    $($input).attr('value', eval(userInput));
}

function render() {
    $($input).attr('value', '');
    userInput = '';
}