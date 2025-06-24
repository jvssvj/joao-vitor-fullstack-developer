import { renderProjects } from '../render/renderProjects.js'

export async function createProjects(lang) {
    const container = document.querySelector('.projects__container')
    container.innerHTML = ''

    try {
        const [projectsRes, translationsRes] = await Promise.all([
            fetch('src/data/projects.json'),
            fetch('src/data/translate.json')
        ])

        const projectsData = await projectsRes.json()
        const translations = await translationsRes.json()
        const projectTranslations = translations[lang]?.projects?.project || {}

        projectsData.forEach(project => {
            const {
                id,
                name,
                description,
                image,
                liveLink,
                repositoryLink,
                tools
            } = project

            const toolsArray = Array.isArray(tools) ? tools : Object.values(tools)
            const t = projectTranslations[id] || {}

            renderProjects(
                t.name || name,
                t.description || description,
                image,
                liveLink,
                repositoryLink,
                toolsArray,
                t.liveLink || 'Explore o Projeto'
            )
        })
    } catch (error) {
        console.error('Erro ao carregar projetos:', error)
    }
}