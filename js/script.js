let img = document.querySelector('input')
document.onkeydown = tecla
document.onkeyup = frente

function tecla(e) {

if (e.keyCode == 38) {
img.setAttribute('src', 'img/jump.gif')
img.setAttribute('class', 'cima')
    } else if (e.keyCode == 37) {
        img.setAttribute('src', 'img/tras.gif')
        img.setAttribute('class', 'tras')
    } else if (e.keyCode == 39) {
        img.setAttribute('src', 'img/walker.gif')
        img.setAttribute('class', 'frente')
    }
        
}

function frente () {
    img.setAttribute('src', 'img/parado.gif')
    img.setAttribute('class', 'frente')
}