let canvas = document.querySelector('#smokey')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext('2d')

var party = SmokeMachine(ctx, [255, 255, 255])
// party.addSmoke(150, 150)
party.start()



let x = 0
let y = 0

window.onmousemove = function (event) {
    x = event.screenX
    y = event.screenY

}

function addSmoke() {
    party.addSmoke(x, y)
}

setInterval(addSmoke, 1000)