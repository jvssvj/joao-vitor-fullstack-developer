import { renderTools } from '../render/renderTools.js'

export async function createTools() {
    try {
        const response = await fetch('src/data/tools.json')
        const data = await response.json()

        data.forEach(tool => {
            const { image, name } = tool
            renderTools(image, name)
        })

        data.forEach(tool => {
            const { image, name } = tool
            renderTools(image, name)
        })

        const toolsElement = document.querySelector('.tools')
        const totalWidth = toolsElement.scrollWidth / 2
        toolsElement.style.setProperty('--scroll-width', `${totalWidth}px`)

    } catch (error) {
        console.error('Erro ao carregar tools:', error)
    }
}