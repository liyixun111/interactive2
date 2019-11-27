window.addEventListener('resize', pageResized)

let box = document.querySelector('.box')

function pageResized() {

    let rotation = (1 - (window.innerWidth / window.screen.width)) * 3600
    let percent = ((window.innerWidth / window.screen.width)) * 100
    // let colorFromScreenWidth = 'hsl(0,0%,' + windowPercentOfScreen + '%)'
    // document.body.style.color = colorFromScreenWidth
    box.style.transform = 'scale(' + (percent / 100) + ') rotate(' + rotation + 'deg)'


}

pageResized()