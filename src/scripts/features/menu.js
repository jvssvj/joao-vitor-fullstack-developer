function headerEffect() {
    const header = document.querySelector('.header')
    const headerNav = document.querySelector('.header__nav')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.remove('transparent')
            header.classList.add('scrolled')
            headerNav.classList.add('width__animation')
        } else {
            headerNav.classList.remove('width__animation')
            header.classList.remove('scrolled')
            header.classList.add('transparent')
        }
    })
}

function openCloneMenu() {
    const nav = document.querySelector('.header__nav')
    const overlay = document.querySelector('.overlay')
    nav.classList.toggle('open')
    overlay.classList.toggle('visible')
}

export function menu() {
    const checkbox = document.querySelector('#check')
    const overlay = document.querySelector('.overlay')

    checkbox.addEventListener('change', openCloneMenu)
    overlay.addEventListener('click', () => {
        openCloneMenu()
        disableMenuHamburguer()
    })
    headerEffect()
}

export function disableMenuHamburguer() {
    const checkbox = document.querySelector('#check')
    const nav = document.querySelector('.header__nav')
    const overlay = document.querySelector('.overlay')

    if (checkbox.checked) checkbox.checked = false
    nav.classList.remove('open')
    overlay.classList.remove('visible')
}