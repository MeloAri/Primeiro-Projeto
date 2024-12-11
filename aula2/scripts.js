let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPositiion = itens.length - 1


nextButton.onclick = () => {
    let itemOld = container.querySelector ('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPositiion ? 0 : active + 1
    itens[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0'  + (active + 1)


    list.style.setProperty('--calculation' , 1)

    
}

prevButton.onclick = () => {
    let itemOld = container.querySelector ('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPositiion : active - 1
    itens[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0'  + (active + 1)

    list.style.setProperty('--calculation' , -1)
}

