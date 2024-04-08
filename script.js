let score = 0;
const popcat = document.getElementById('popcat');
const scoreDisplay = document.getElementById('score');
const pop = document.getElementById('pop');

document.addEventListener('mousedown', () => {
    popcat.src = 'assets/popcat.png';
    pop.currentTime = 0;
    pop.play();
    score++;
    scoreDisplay.textContent = formatNumber(score);
    scoreDisplay.style.setProperty('--rotation', Math.floor(Math.random() * 20 - 10));
    scoreDisplay.style.animation = 'none';
    void scoreDisplay.offsetWidth;
    scoreDisplay.style.animation = 'bounce 0.1s';
});

document.addEventListener('mouseup', () => {
    popcat.src = 'assets/cat.png';
});

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}