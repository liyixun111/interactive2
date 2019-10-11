let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-7");



element3.addEventListener("click", function () {
    var adder = 6

    var x = 0
    element3.style.position = 'relative'

    function draw() {
        x = x + adder

        let width = window.innerWidth - element3.clientWidth
        let hasLeftScreen = x > width || x < -width
        if (hasLeftScreen) {
            adder *= -1
            // x = -width
        }
        console.log(x)
        element3.style.left = x + "px"
        window.requestAnimationFrame(draw)
    }


    window.requestAnimationFrame(draw)
});



element4.addEventListener("click", function () {
    var adder = 6

    var x = 0
    element4.style.position = 'relative'

    function draw() {
        x = x + adder

        let width = window.innerWidth - element4.clientWidth
        let hasLeftScreen = x > width || x < -width
        if (hasLeftScreen) {
            // adder *= -1
            x = -width
        }
        console.log(x)
        element4.style.left = x + "px"
        window.requestAnimationFrame(draw)
    }


    window.requestAnimationFrame(draw)
})




// element6.addEventListener("pointermove", function (e) {
//     var xPos = e.pageX - 125;
//     var yPos = e.pageY - 125;

//     this.style.position = "absolute";
//     this.style.top = yPos + "px";
//     this.style.left = xPos + "px";
// });

// element4.addEventListener("click", function () {
//     this.classList.add("gradient-background");
// });

// element5.addEventListener("click", function () {
//     this.nextElementSibling.classList.toggle("circle");
// });


let element16 = document.querySelector('#element-16')

let squares = []

for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let square = document.createElement('div')
        square.classList.add('square')

        square.style.top = y * 40 + 'px'
        square.style.left = x * 40 + 'px'

        element16.appendChild(square)
        squares.push(square)
    }


}

element16.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares.length; counter++) {

        let x = Math.random() * 400 - 300
        let y = Math.random() * 200 - 150

        squares[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)'
    }
})
element16.addEventListener('mouseleave', function () {
    console.log('16-leave')
})


let element17 = document.querySelector('#element-17')



element17.addEventListener('mouseenter', function () {
    element17.classList.add('beenHovered')


    setTimeout(function () {
        element17.classList.remove('beenHovered')
    }, 700)

})