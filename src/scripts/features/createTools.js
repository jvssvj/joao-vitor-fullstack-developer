import { renderTools } from '../render/renderTools.js'

export async function createTools() {
    try {
        const response = await fetch('src/data/tools.json')
        const data = await response.json()

        data.forEach(tech => {
            const { image, name } = tech
            renderTools(image, name)
        })

        data.forEach(tech => {
            const { image, name } = tech
            renderTools(image, name)
        })

        const techsElement = document.querySelector('.techs')
        const totalWidth = techsElement.scrollWidth / 2
        techsElement.style.setProperty('--scroll-width', `${totalWidth}px`)

    } catch (error) {
        console.error('Erro ao carregar techs:', error)
    }
}