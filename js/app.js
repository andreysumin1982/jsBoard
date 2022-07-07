/*  */
const board = document.querySelector('.container');
const SQUARE_NUMBER = 600;
const colors = ['#20639b', '#adff2f', '#f6d55c', '#ffa500', '#ff00ff', 'ffff00'];

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    board.append(square);
};

function setColor(event) {
    const color = getRandomColor(colors);
    const elem = event.target;
    elem.style.background = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(event) {
    const elem = event.target;
    elem.style.background = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`
};

function getRandomColor(myArr) {
    return myArr[Math.floor(Math.random() * colors.length)];
};