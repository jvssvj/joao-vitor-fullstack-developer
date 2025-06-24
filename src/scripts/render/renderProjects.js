export function renderProjects(name, description, image, liveLink, repositoryLink, tools = []) {
    const projectContainer = document.createElement('div')
    const projectInfosContainer = document.createElement('section')

    const projectImage = document.createElement('img')
    const projectName = document.createElement('h2')
    const projectDescription = document.createElement('p')

    const toolsContainer = document.createElement('div')

    const projectBtnsContainer = document.createElement('div')
    const projectLive = document.createElement('a')
    const projectRepository = document.createElement('a')


    projectContainer.classList.add('project__container')
    projectInfosContainer.classList.add('project__infos__container')

    projectImage.src = image
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
    projectLive.textContent = 'Ver Projeto'

    projectRepository.classList.add('project__repository')
    projectRepository.rel = 'noopener noreferrer'
    projectRepository.target = '_blank'
    projectRepository.href = repositoryLink
    projectRepository.textContent = 'GitHub Repo'

    tools.forEach(tool => {
        const toolImage = document.createElement('img')
        toolImage.classList.add('project__tools__img')
        toolImage.src = tool.image
        toolImage.alt = tool.name

        toolsContainer.append(toolImage)
    })

    projectInfosContainer.append(projectName, projectDescription, toolsContainer, projectBtnsContainer)

    projectContainer.append(projectImage, projectInfosContainer)
    document.querySelector('.projects__container').append(projectContainer)
}