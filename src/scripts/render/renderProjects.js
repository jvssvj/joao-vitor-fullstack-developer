export function renderProjects(name, description, image, liveLink, repositoryLink, tools = [], liveLinkText) {
    const lineTop = document.createElement('div')

    const projectContainer = document.createElement('div')
    const projectInfosContainer = document.createElement('section')

    const projectImage = document.createElement('img')
    const projectName = document.createElement('h2')
    const projectDescription = document.createElement('p')

    const toolsContainer = document.createElement('div')

    const projectBtnsContainer = document.createElement('div')
    const projectLive = document.createElement('a')
    const projectRepository = document.createElement('a')

    const lineBottom = document.createElement('div')

    projectContainer.classList.add('project__container')
    projectInfosContainer.classList.add('project__infos__container')

    projectImage.src = image
    projectImage.alt = `Imagem do projeto`
    projectImage.classList.add('project__img')
    projectName.textContent = name
    projectName.classList.add('project__name')
    projectDescription.textContent = description
    projectDescription.classList.add('project__description')

    toolsContainer.classList.add('project__tools')

    projectBtnsContainer.classList.add('project__btns')
    projectBtnsContainer.append(projectLive, projectRepository)

    projectLive.classList.add('project__live')
    projectLive.rel = 'noopener noreferrer'
    projectLive.target = '_blank'
    projectLive.href = liveLink
    projectLive.textContent = liveLinkText

    projectRepository.classList.add('project__repository')
    projectRepository.rel = 'noopener noreferrer'
    projectRepository.target = '_blank'
    projectRepository.href = repositoryLink
    projectRepository.textContent = 'GitHub Repo'

    tools.forEach(tool => {
        const toolName = document.createElement('span')
        toolName.classList.add('project__tools__name')
        toolName.textContent = tool

        toolsContainer.append(toolName)
    })

    lineTop.classList.add('line__top')
    lineBottom.classList.add('line__bottom')

    projectInfosContainer.append(projectName, projectDescription, toolsContainer, projectBtnsContainer)

    projectContainer.append(projectImage, projectInfosContainer)
    document.querySelector('.projects__container').append(lineTop, projectContainer, lineBottom)
}