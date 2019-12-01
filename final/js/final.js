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
    'rotate3d(0, 1, 0, 180deg)',
    'rotate3d(0, 1, 0, 270deg)',
    'rotate3d(0, 1, 0, 90deg)',
    'rotate3d(0, 1, 0, 0deg)',
    'rotate3d(0, -1, 1, 180deg)',
    'rotate3d(0, -1, 1, 180deg)'
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

}




for (let counter = 0; counter < thumbnails2.length; counter++) {
    thumbnails2[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected')
        let previousSelection = document.querySelector('.currentlySelected')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected')
        }

        thumbnails2[counter].classList.add('currentlySelected')
        bigImage2.style.backgroundImage = getComputedStyle(thumbnails2[counter]).backgroundImage
    })

}

for (let counter = 0; counter < thumbnails3.length; counter++) {
    thumbnails3[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected')
        let previousSelection = document.querySelector('.currentlySelected')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected')
        }

        thumbnails3[counter].classList.add('currentlySelected')
        bigImage3.style.backgroundImage = getComputedStyle(thumbnails3[counter]).backgroundImage
    })

}

for (let counter = 0; counter < thumbnails4.length; counter++) {
    thumbnails4[counter].addEventListener('click', function () {
        document.body.classList.add('hasBeenSelected')
        let previousSelection = document.querySelector('.currentlySelected')
        if (previousSelection) {
            previousSelection.classList.remove('currentlySelected')
        }

        thumbnails4[counter].classList.add('currentlySelected')
        bigImage4.style.backgroundImage = getComputedStyle(thumbnails4[counter]).backgroundImage
    })

}