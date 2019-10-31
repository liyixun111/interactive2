let sun = document.querySelector('#sun')

let zom = document.querySelector('#zom')
let timeEl = document.querySelector('#time')
// let secondHand = document.querySelector('#secondHand')

// run getTime once on load

getTime();

// call getTime every 1 second going forward

setInterval(function () {
    getTime();
}, 1000);


// set up time getting function

function getTime() {

    // get the date object

    let d = new Date();

    // get hours, minutes, and seconds from the date object

    let h = addZeroIfNeeded(d.getHours());
    let m = addZeroIfNeeded(d.getMinutes());
    let s = addZeroIfNeeded(d.getSeconds());

    console.log(1 - s / 60)
    sun.style.opacity = 1 - s / 60
    // update the clock's text with our time vars

    let timeText = h + ":" + m + ":" + s
    timeEl.innerText = timeText

    // rotate secondHand based on the second value

    // s ranges from 0 to 60, so to turn it into degrees
    // we need to multiply s by 6

    // secondHand.style.transform = 'rotate(' + s * 6 + 'deg)'

    // detect if its a minute divisible by 5

    if (m < 20) {
        zom.classList.remove('zomTwo')
        zom.classList.remove('zomThree')
        zom.classList.remove('zomFour')
        zom.classList.remove('zomFive')
    } else if (m < 30) {
        zom.classList.add('zomTwo')
        zom.classList.remove('zomThree')
        zom.classList.remove('zomFour')
        zom.classList.remove('zomFive')
    } else if (m < 40) {
        zom.classList.add('zomThree')
        zom.classList.remove('zomTwo')
        zom.classList.remove('zomFour')
        zom.classList.remove('zomFive')
    } else if (m < 50) {
        zom.classList.add('zomFour')
        zom.classList.remove('zomTwo')
        zom.classList.remove('zomThree')
        zom.classList.remove('zomFive')
    } else if (m < 60) {
        zom.classList.add('zomFive')
        zom.classList.remove('zomTwo')
        zom.classList.remove('zomThree')
        zom.classList.remove('zomFour')
    } else {
        zom.classList.add('zomThree')
        zom.classList.remove('zomTwo')
        zom.classList.remove('zomFour')
    }
}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}