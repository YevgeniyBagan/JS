const textIpnut = document.querySelector('#input_1');
const textOut = document.querySelector('#duplicateField');
const inConsole = document.querySelector('button');

textIpnut.addEventListener('input', switchText);

function switchText(event) {
    textOut.textContent = event.target.value;
}

inConsole.addEventListener('click', (event) => {
    console.log(event);
    textIpnut.value = "";
});



// function textInConsole() {
//     console.log(textOut.textContent);
//     textIpnut.value = "";
// }



