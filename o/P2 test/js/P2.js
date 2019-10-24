let element1 = document.querySelector("element-1");












function makeHTMLintoElement(str) {
    let el = document.createElement('div')

    el.innerHTML = str

    return el.firstElementChild
}









let circles = []


let firstBox = document.querySelector('#firstBox')

for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let gary = makeHTMLintoElement(`<div class="circle" id="element-1">

<div class="CircleA">
    <!-- <img id="P50" src="../exercise2/giphy.gif"> -->
    <div class="CircleB">
        <div class="CircleB CircleC">
            <div class="CircleB">
                <div class="CircleB CircleC">
                    <div class="CircleB">
                        <div class="CircleB CircleC">
                            <div class="CircleB">
                                <div class="CircleB CircleC">
                                    <div class="CircleB">
                                        <div class="CircleB CircleC">
                                            <div class="CircleB">
                                                <div class="CircleB CircleC">
                                                    <div class="CircleB">
                                                        <div class="CircleB CircleC">
                                                            <div class="CircleB">
                                                                <div class="CircleB CircleC">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`)

        firstBox.appendChild(gary)

        // CircleA.classList.add('CircleA')

        gary.style.top = (Math.random() + y) * 40 + 'px'
        gary.style.left = (Math.random() + x) * 40 + 'px'
    }


}

// element1.addEventListener('mouseenter', function () {
//     for (let counter = 0; counter < circles.length; counter++) {

//         let x = Math.random() * 400 - 300;
//         let y = Math.random() * 200 - 150;
//         let s = Math.random() * 2;
//         let r = Math.random() * 360;

//         // squares[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)' + 'scale(' + s + ')';
//         // squares[counter].style.transform = 'rotate(' + r + 'deg)';
//         // squares[counter].style.transform = 'scale(' + s + ')';
//         circles[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';
//     }
// })
// element1.addEventListener('mouseleave', function () {
//     console.log('1-leave')
// })