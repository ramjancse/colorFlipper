
    const colorElem = document.getElementById('color');
    const buttonElem = document.getElementById('button');
    const mainElem = document.getElementById('main');

function getRandomColorCode() {
    return Math.floor(Math.random() * 16777216).toString(16).toUpperCase();
}

buttonElem.addEventListener('click', (event) => {
    let getcolorCode = getRandomColorCode();
    colorElem.innerHTML = getcolorCode;
    mainElem.style.backgroundColor = '#'+ getcolorCode;
})


