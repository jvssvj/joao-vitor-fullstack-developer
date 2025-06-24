import { renderProjects } from '../render/renderProjects.js'

export async function createProjects() {
    try {
        const response = await fetch('src/data/projects.json')
        const data = await response.json()

        data.forEach(project => {
            const { name, description, image, liveLink, repositoryLink, tools } = project
            const toolsArray = Array.isArray(tools) ? tools : Object.values(tools)
            renderProjects(name, description, image, liveLink, repositoryLink, toolsArray)
        })

    } catch (error) {
        console.error('Erro ao carregar projetos:', error)
    }
}