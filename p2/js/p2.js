let squareA = document.querySelector("#squareA");
let squareB = document.querySelector("#squareB");
let squareC = document.querySelector("#squareC");





let squares = []

for (let y = 0; y < 10; y++) {

    for (let x = 0; x < 20; x++) {

        let square = document.createElement('div')
        square.classList.add('square')

        square.style.top = y * 80 + 'px'
        square.style.left = x * 80 + 'px'

        squareA.appendChild(square)
        squares.push(square)
    }


}

squareA.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares.length; counter++) {

        let x = Math.random() * 400 - 300;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * .6;
        let r = Math.random() * 360;

        // squares[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)' + 'scale(' + s + ')';
        // squares[counter].style.transform = 'rotate(' + r + 'deg)';
        // squares[counter].style.transform = 'scale(' + s + ')';
        squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';




    }
})
squareA.addEventListener('mouseleave', function () {
    console.log('A-leave')
})





let squares1 = []

for (let y = 0; y < 10; y++) {

    for (let x = 0; x < 20; x++) {

        let square1 = document.createElement('div')
        square1.classList.add('square1')

        square1.style.top = y * 40 + 'px'
        square1.style.left = x * 40 + 'px'

        squareB.appendChild(square1)
        squares1.push(square1)
    }


}

squareB.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares1.length; counter++) {

        let x = Math.random() * 400 - 150;
        let y = Math.random() * 200 - 100;
        let s = Math.random() * 1;
        let r = Math.random() * 360;

        // squares1[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)' + 'scale(' + s + ')';
        squares1[counter].style.transform = 'rotate(' + r + 'deg)' + 'translate(' + x + 'px,' + y + 'px)' + 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';




    }
})
squareB.addEventListener('mouseleave', function () {
    console.log('B-leave')
})




let squares2 = []


for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let square2 = document.createElement('div')
        square2.classList.add('square2')

        square2.style.top = y * 80 + 'px'
        square2.style.left = x * 80 + 'px'

        squareC.appendChild(square2)
        squares2.push(square2)
    }


}



squareC.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares2.length; counter++) {

        let x = Math.random() * 400 - 300;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * 2;
        let r = Math.random() * 360;

        // squares1[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)' + 'scale(' + s + ')';
        squares2[counter].style.transform = 'rotate(' + r + 'deg)' + 'translate(' + x + 'px,' + y + 'px)' + 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';




    }

})
squareC.addEventListener('mouseleave', function () {
    console.log('C-leave')
})






// squareC.addEventListener('mousewheel', function (event) {


//     chadZoom += event.deltaY / 10

//     squareC.style.background = 'hsl(' + chadZoom + ', 100%, 50%)'

//     event.preventDefault()
//     event.stopPropagation()

// })