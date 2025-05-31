import { renderTechs } from '../render/renderTechs.js'

export async function createTechs() {
    try {
        const response = await fetch('src/data/techs.json')
        const data = await response.json()

        data.forEach(tech => {
            const { image, name } = tech
            renderTechs(image, name)
        })

        data.forEach(tech => {
            const { image, name } = tech
            renderTechs(image, name)
        })

        const techsElement = document.querySelector('.techs')
        const totalWidth = techsElement.scrollWidth / 2
        techsElement.style.setProperty('--scroll-width', `${totalWidth}px`)

    } catch (error) {
        console.error('Erro ao carregar techs:', error)
    }
}