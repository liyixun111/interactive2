let cube = document.querySelector('#cube')
let faces = document.querySelectorAll('.face')

let thumbnails = document.querySelectorAll('.pg1')
let bigImage = document.querySelector('#bigImage')

let thumbnails2 = document.querySelectorAll('.pg2')
let bigImage2 = document.querySelector('#bigImage2')

let thumbnails3 = document.querySelectorAll('.pg3')
let bigImage3 = document.querySelector('#bigImage3')

let thumbnails4 = document.querySelectorAll('.pg4')
let bigImage4 = document.querySelector('#bigImage4')

let thumbnails5 = document.querySelectorAll('.pg5')
let bigImage5 = document.querySelector('#bigImage5')

let thumbnails6 = document.querySelectorAll('.pg6')
let bigImage6 = document.querySelector('#bigImage6')


document.addEventListener('mousemove', function (event) {

    let mX = window.innerWidth / 2
    let mY = window.innerHeight / 2

    let angle = -Math.atan2(mY - event.pageY, mX - event.pageX) + Math.PI


    let xDist = mY - event.pageY
    let yDist = mX - event.pageX

    let dist = Math.sqrt(xDist * xDist + yDist * yDist)
    let maxDist = Math.sqrt(mX * mX + mY * mY)

    let turnAmount = dist / maxDist * 90


    // 'transform:rotate3d(1,1,0,45deg)'

    let xAmount = Math.sin(angle)
    let yAmount = Math.cos(angle)

    // cube.style.transform = 'rotate3d(' + xAmount + ',' + yAmount + ',0,' + turnAmount + 'deg)'


    // console.log(angle)
    // console.log('rotate3d(' + xAmount + ',' + yAmount + ',0,' + turnAmount + 'deg)')
})

let titles = document.querySelectorAll('.homeTitle')
console.log(titles)

let lookPositions = [
    'rotate3d(1.2, 1, 0.2, 180deg)',
    'rotate3d(0.4, 1, 0.2, 270deg)',
    'rotate3d(0, 1, 0.2, 90deg)',
    'rotate3d(0, 1, 0, 20deg)',
    'rotate3d(0, -1, 0.6, 180deg)',
    'rotate3d(0, -1, 1.6, 180deg)'
]


for (let counter = 0; counter < titles.length; counter++) {
    titles[counter].addEventListener('mouseenter', function () {
        setTimeout(function () {
            cube.style.transform = lookPositions[counter]
        }, 32)
        faces[counter].classList.add('active')
        cube.classList.add('stop')
        console.log(counter)
    })
    titles[counter].addEventListener('mouseleave', function () {
        cube.style.transform = 'rotate3d(1, 1, 1, 45deg)'
        faces[counter].classList.remove('active')
        cube.classList.remove('stop')
    })
}

for (let counter = 0; counter < thumbnails.length; counter++) {
    thumbnails[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected')
        let previousSelection = document.querySelector('.currentlySelected')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected')
        }

        thumbnails[counter].classList.add('currentlySelected')
        bigImage.style.backgroundImage = getComputedStyle(thumbnails[counter]).backgroundImage
    })

    thumbnails[0].classList.add('currentlySelected')
    bigImage.style.backgroundImage = getComputedStyle(thumbnails[0]).backgroundImage
    document.body.classList.add('hasBeenSelected')
}




for (let counter = 0; counter < thumbnails2.length; counter++) {
    thumbnails2[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected2')
        let previousSelection = document.querySelector('.currentlySelected2')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected2')
        }

        thumbnails2[counter].classList.add('currentlySelected2')
        bigImage2.style.backgroundImage = getComputedStyle(thumbnails2[counter]).backgroundImage
    })

    thumbnails2[0].classList.add('currentlySelected2')
    bigImage2.style.backgroundImage = getComputedStyle(thumbnails2[0]).backgroundImage
    document.body.classList.add('hasBeenSelected2')
}

for (let counter = 0; counter < thumbnails3.length; counter++) {
    thumbnails3[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected3')
        let previousSelection = document.querySelector('.currentlySelected3')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected3')
        }

        thumbnails3[counter].classList.add('currentlySelected3')
        bigImage3.style.backgroundImage = getComputedStyle(thumbnails3[counter]).backgroundImage
    })

    thumbnails3[0].classList.add('currentlySelected3')
    bigImage3.style.backgroundImage = getComputedStyle(thumbnails3[0]).backgroundImage
    document.body.classList.add('hasBeenSelected3')
}

for (let counter = 0; counter < thumbnails4.length; counter++) {
    thumbnails4[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected4')
        let previousSelection = document.querySelector('.currentlySelected4')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected4')
        }

        thumbnails4[counter].classList.add('currentlySelected4')
        bigImage4.style.backgroundImage = getComputedStyle(thumbnails4[counter]).backgroundImage
    })

    thumbnails4[0].classList.add('currentlySelected4')
    bigImage4.style.backgroundImage = getComputedStyle(thumbnails4[0]).backgroundImage
    document.body.classList.add('hasBeenSelected4')
}

for (let counter = 0; counter < thumbnails5.length; counter++) {
    thumbnails5[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected5')
        let previousSelection = document.querySelector('.currentlySelected5')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected5')
        }

        thumbnails5[counter].classList.add('currentlySelected5')
        bigImage5.style.backgroundImage = getComputedStyle(thumbnails5[counter]).backgroundImage
    })

    thumbnails5[0].classList.add('currentlySelected5')
    bigImage5.style.backgroundImage = getComputedStyle(thumbnails5[0]).backgroundImage
    document.body.classList.add('hasBeenSelected5')
}

for (let counter = 0; counter < thumbnails6.length; counter++) {
    thumbnails6[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected6')
        let previousSelection = document.querySelector('.currentlySelected6')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected6')
        }

        thumbnails6[counter].classList.add('currentlySelected6')
        bigImage6.style.backgroundImage = getComputedStyle(thumbnails6[counter]).backgroundImage
    })

    thumbnails6[0].classList.add('currentlySelected6')
    bigImage6.style.backgroundImage = getComputedStyle(thumbnails6[0]).backgroundImage
    document.body.classList.add('hasBeenSelected6')
}