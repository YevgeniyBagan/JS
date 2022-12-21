const inPut_1 = document.querySelector('.text');

inPut_1.addEventListener('click', function(e) {
    this.textContent = prompt('Введите Ваш текст'); 
});

// // { 'passiv': true,}




// const inPut_1 = document.querySelector('.text');
// inPut_1.addEventListener('click', switchText);

// function switchText() {
//     const text = prompt('Введите Ваш текст');
//     if (text) {
//         inPut_1.textContent = text;
//     }
// }
