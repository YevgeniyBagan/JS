const inPut_1 = document.querySelector('.text');
inPut_1.addEventListener('click', switchText);

function switchText(event) {
    event.preventDefault();
    const text = prompt('Введите Ваш текст');
    if (text) {
        inPut_1.textContent = text;
    }
}

