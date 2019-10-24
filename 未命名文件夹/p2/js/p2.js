document.addEventListener('mousemove', function (event) {

    // console.log(event.pageX)
    // console.log(event.pageY)


    let brightness = (event.pageY / window.innerHeight) * 100
    let hue = (event.pageX / window.innerWidth) * 360

    let saturation = (Math.abs(event.movementX) / 10) * 100


    document.body.style.background = 'hsl(' + hue + ', ' + saturation + '%, ' + brightness + '%)'


})

let pink = document.querySelector('#pink')
let pinkCount = 0

pink.addEventListener('click', function () {
    if (pinkCount % 3 == 0) {




        console.log('zero')
        let randomR = Math.random() * 255
        let randomG = Math.random() * 255
        let randomB = Math.random() * 255
        pink.style.background = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',0.1)'

    } else if (pinkCount % 3 == 1) {



        console.log('one')
        let randomWidth = 80 + Math.random() * 100
        pink.style.width = randomWidth + 'px'
        let randomHeight = 80 + Math.random() * 100
        pink.style.width = randomHeight + 'px'

    } else if (pinkCount % 3 == 2) {



        console.log('two')

        pink.style.marginTop = Math.random() * 250 + 'px'
        pink.style.marginLeft = Math.random() * 250 + 'px'


    }

    pinkCount = pinkCount + 1


    console.log(pinkCount)



})