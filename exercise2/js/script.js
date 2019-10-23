let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-7");
let element16 = document.querySelector('#element-16')
let element17 = document.querySelector('#element-17')
let element20 = document.querySelector('#element-20')
let element21 = document.querySelector("#element-21");
let element22 = document.querySelector("#element-22");
let element23 = document.querySelector("#element-23");
let element24 = document.querySelector("#element-24");
let element27 = document.querySelector("#element-27");
let element29 = document.querySelector("#element-29");
let element30 = document.querySelector("#element-30");
let element34 = document.querySelector("#element-34");
let element35 = document.querySelector("#element-35");
let element36 = document.querySelector("#element-36");
let element38 = document.querySelector("#element-38");
let element39 = document.querySelector("#element-39");
let element40 = document.querySelector("#element-40");
let element42 = document.querySelector("#element-42");
let element43 = document.querySelector("#element-43");
let element45 = document.querySelector("#element-45");
let element46 = document.querySelector("#element-46");
let element48 = document.querySelector("#element-48");
let element49 = document.querySelector("#element-49");



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

        let x = Math.random() * 400 - 300;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * 2;
        let r = Math.random() * 360;

        // squares[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)' + 'scale(' + s + ')';
        // squares[counter].style.transform = 'rotate(' + r + 'deg)';
        // squares[counter].style.transform = 'scale(' + s + ')';
        squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';




    }
})
element16.addEventListener('mouseleave', function () {
    console.log('16-leave')
})






element17.addEventListener('mouseenter', function () {
    element17.classList.add('beenHovered')


    setTimeout(function () {
        element17.classList.remove('beenHovered')
    }, 700)

})

element20.addEventListener('mouseenter', function () {
    element20.classList.add('beenHovered')


    setTimeout(function () {
        element20.classList.remove('beenHovered')
    }, 1100)
})




element21.addEventListener("click", function () {
    element21.animate(
        [{
                opacity: 0,
                marginLeft: getComputedStyle(this).marginLeft,
                fontSize: "100px",
                borderWidth: getComputedStyle(this).borderWidth
            },
            {
                opacity: 0.4,
                marginLeft: "125px",
                fontSize: "24px",
                borderWidth: "10px"
            }
        ], {
            duration: 200,
            iterations: 1,
            fill: "forwards"
        }
    );
});

element24.addEventListener("pointermove", function (e) {
    var xPos = e.pageX - 50;
    var yPos = e.pageY - 50;

    document.querySelector(".circleA").style.position = "absolute";
    document.querySelector(".circleA").style.top = yPos + "px";
    document.querySelector(".circleA").style.left = xPos + "px";
});

element22.addEventListener("click", function () {
    this.classList.add("gradient-background");
});

// element23.addEventListener("click", function () {
//     this.nextElementSibling.classList.toggle("circle");
// });


let squares1 = []

for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let square1 = document.createElement('div')
        square1.classList.add('square1')

        square1.style.top = y * 40 + 'px'
        square1.style.left = x * 40 + 'px'

        element27.appendChild(square1)
        squares1.push(square1)
    }


}

element27.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares1.length; counter++) {

        let x = Math.random() * 400 - 300;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * 2;
        let r = Math.random() * 360;

        squares1[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)'
        // squares[counter].style.transform = 'rotate(' + r + 'deg)';
        // squares[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';
    }
})
element27.addEventListener('mouseleave', function () {
    console.log('27-leave')
})

element29.addEventListener('mouseenter', function () {
    element29.classList.add('beenHovered')


    setTimeout(function () {
        element29.classList.remove('beenHovered')
    }, 1200)

})


let squares2 = []

for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let square2 = document.createElement('div')
        square2.classList.add('square1')

        square2.style.top = y * 40 + 'px'
        square2.style.left = x * 40 + 'px'

        element30.appendChild(square2)
        squares2.push(square2)
    }


}

element30.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares2.length; counter++) {

        let x = Math.random() * 400 - 300;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * 2;
        let r = Math.random() * 360;

        // squares2[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)'
        squares2[counter].style.transform = 'rotate(' + r + 'deg)';
        // squares[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';
    }
})
element30.addEventListener('mouseleave', function () {
    console.log('30-leave')
})

element34.addEventListener('mouseenter', function () {
    element34.classList.add('beenHovered')


    setTimeout(function () {
        element34.classList.remove('beenHovered')
    }, 600)

})



let squares3 = []

for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let square3 = document.createElement('div')
        square3.classList.add('square3')

        square3.style.top = y * 40 + 'px'
        square3.style.left = x * 40 + 'px'

        element35.appendChild(square3)
        squares3.push(square3)
    }


}

element35.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares3.length; counter++) {

        let x = Math.random() * 400 - 300;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * 1;
        let r = Math.random() * 360;

        // squares2[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)'
        // squares3[counter].style.transform = 'rotate(' + r + 'deg)';
        squares3[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';
    }
})
element35.addEventListener('mouseleave', function () {
    console.log('35-leave')
})

element36.addEventListener('mouseenter', function () {
    element36.classList.add('beenHovered')


    setTimeout(function () {
        element36.classList.remove('beenHovered')
    }, 1000)

})

element38.addEventListener('mouseenter', function () {
    element38.classList.add('beenHovered')


    setTimeout(function () {
        element38.classList.remove('beenHovered')
    }, 1000)

})

element39.addEventListener('mouseenter', function () {
    element39.classList.add('beenHovered')


    setTimeout(function () {
        element39.classList.remove('beenHovered')
    }, 1000)

})

element40.addEventListener('mouseenter', function () {
    element40.classList.add('beenHovered')


    setTimeout(function () {
        element40.classList.remove('beenHovered')
    }, 1000)

})

element42.addEventListener('mouseenter', function () {
    element42.classList.add('beenHovered')


    setTimeout(function () {
        element42.classList.remove('beenHovered')
    }, 1000)

})

element43.addEventListener('mouseenter', function () {
    element43.classList.add('beenHovered')


    setTimeout(function () {
        element43.classList.remove('beenHovered')
    }, 1800)

})

element45.addEventListener('mouseenter', function () {
    element45.classList.add('beenHovered')


    setTimeout(function () {
        element45.classList.remove('beenHovered')
    }, 1000)

})

element46.addEventListener('mouseenter', function () {
    element46.classList.add('beenHovered')


    setTimeout(function () {
        element46.classList.remove('beenHovered')
    }, 1000)

})

element48.addEventListener('mouseenter', function () {
    element48.classList.add('beenHovered')


    setTimeout(function () {
        element48.classList.remove('beenHovered')
    }, 1000)

})

element49.addEventListener('mouseenter', function () {
    element49.classList.add('beenHovered')


    setTimeout(function () {
        element49.classList.remove('beenHovered')
    }, 1000)

})