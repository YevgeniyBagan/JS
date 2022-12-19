const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации');
})


const alert_1 = document.querySelector('#alert_1');

alert_1.addEventListener('click', () => {
    alert('Функция alert позволяет вывести какую-либо информацию во всплывающем окне в браузере.');
})

const prompt_1 = document.querySelector('#prompt_1');

prompt_1.addEventListener('click', () => {
    alert('Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена».');
})
