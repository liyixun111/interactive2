let NetA = document.querySelector(".NetA");






let squares = []

for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let square = document.createElement('div')
        square.classList.add('square1')

        // square.style.top = y * 40 + 'px'
        // square.style.left = x * 40 + 'px'

        NetA.appendChild(square)
        squares.push(square)

        square.style.top = (Math.random() + y) * 40 + 'px'
        square.style.left = (Math.random() + x) * 40 + 'px'
    }


}


NetA.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares.length; counter++) {

        let x = Math.random() * 400 - 300;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * 1;
        let r = Math.random() * 360;



        // squares2[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)'
        // squares3[counter].style.transform = 'rotate(' + r + 'deg)';
        squares[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';
    }
})
NetA.addEventListener('mouseleave', function () {
    console.log('35-leave')
})