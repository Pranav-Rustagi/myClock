window.onload = function() {
    let date = new Date();
    let totalSec = (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds();

    const hourHand = document.getElementById("hour");
    const minHand = document.getElementById("min");
    const secHand = document.getElementById("sec");

    setHands(totalSec++, hourHand, minHand, secHand);
    setInterval(() => {
        setHands(totalSec++, hourHand, minHand, secHand);
    }, 1000)
}


const setHands = (totalSec, hourHand, minHand, secHand) => {
    let hrs = ((totalSec / 3600) % 12).toFixed(2);
    let mins = ((totalSec / 60) % 60).toFixed(2);
    let secs = totalSec % 60;

    hourHand.style.transform = `rotate(${hrs * 30}deg) translateY(calc(5 * var(--basic-unit-px)))`;
    minHand.style.transform = `rotate(${mins * 6}deg) translateY(calc(5 * var(--basic-unit-px)))`;
    secHand.style.transform = `rotate(${secs * 6}deg) translateY(calc(5 * var(--basic-unit-px)))`;
}