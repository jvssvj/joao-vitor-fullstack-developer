import { disableMenuHamburguer } from "./menu.js"

export function navigation() {
    const homeBtns = document.querySelectorAll('.nav__home')
    const aboutBtns = document.querySelectorAll('.nav__about')
    const projectsBtns = document.querySelectorAll('.nav__projects')
    const contactBtn = document.querySelector('.header__nav__contacts')

    homeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const homeSection = document.querySelector('.home')

            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' })
                disableMenuHamburguer()
            }
        })
    })

    aboutBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const aboutSection = document.querySelector('.about')

            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                disableMenuHamburguer()
            }
        })
    })

    projectsBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const projectsSection = document.querySelector('.projects')

            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' })
                disableMenuHamburguer()
            }
        })
    })

    contactBtn.addEventListener('click', () => {
        const footerSection = document.querySelector('.footer__social')

        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' })
            disableMenuHamburguer()
        }
    })
}