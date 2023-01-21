const tenis1 = document.querySelector('#tenis-1')
const tenis2 = document.querySelector('#tenis-2')
const anterior = document.querySelector('#anterior')
const proximo = document.querySelector('#proximo')

anterior.addEventListener('click', () => {
    tenis1.style.left = '650px'
    tenis2.style.left = '-50px'
})

proximo.addEventListener('click', () => {
    tenis1.style.left = '-50px'
    tenis2.style.left = '-650px'
})