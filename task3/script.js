const lights = document.querySelectorAll('#trafficLight .light');

lights.forEach(function (light) {
    light.addEventListener('click', switchLights);
});

function switchLights() {
    const green = document.querySelector('#green');
    const yellow = document.querySelector('#yellow');
    const red = document.querySelector('#red');

    function lightGreen() {
        green.style.background = 'green';
        yellow.style.background = 'black';
        red.style.background = 'black';
    }

    function lightYellow() {
        green.style.background = 'black';
        yellow.style.background = 'yellow';
        red.style.background = 'black';
    }

    function lightRed() {
        green.style.background = 'black';
        yellow.style.background = 'black';
        red.style.background = 'red';
    }

    function lightBlack() {
        green.style.background = 'black';
        yellow.style.background = 'black';
        red.style.background = 'black';
    }

    if (
        green.style.background == 'black' 
        && yellow.style.background == 'black' 
        && red.style.background == 'black'
    ) {
        lightGreen();
    } else if (green.style.background == 'green') {
        lightYellow();
    } else if (yellow.style.background == 'yellow') {
        lightRed();
    } else if (red.style.background == 'red') {
        lightBlack();
    }
}








// function makeGreen() {
//     trafficLightEl.style.background = ('green');
//     trafficLightEl.removeEventListener('click', makeGreen);
//     trafficLightEl.addEventListener('click', makeYellow);

//     function makeYellow() {
//         trafficLightEl.style.background = ('yellow');
//         trafficLightEl.removeEventListener('click', makeYellow)
//         trafficLightEl.addEventListener('click', makeRed);

//         function makeRed() {
//             trafficLightEl.style.background = ('red');
//             trafficLightEl.removeEventListener('click', makeRed)
//             trafficLightEl.addEventListener('click', makeGreen);
//         }

//     }
// }
// trafficLightEl.addEventListener('click', makeGreen);