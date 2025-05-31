export function menu() {
    const header = document.querySelector('.header')
    const checkbox = document.getElementById('check')
    const nav = document.querySelector('.header__nav')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.remove('transparent')
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
            header.classList.add('transparent')
        }
    })

    checkbox.addEventListener('change', () => {
        nav.classList.toggle('open', checkbox.checked)
    })
}