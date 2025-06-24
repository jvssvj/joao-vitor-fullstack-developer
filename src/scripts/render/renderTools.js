export function renderTools(toolImg, toolName) {
    const container = document.querySelector('.tools')
    const toolContainer = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    img.src = toolImg
    img.alt = `${toolName} image`
    img.classList.add('tool__image')
    img.ariaHidden = true

    span.textContent = toolName
    span.classList.add('tool__name')

    toolContainer.classList.add('tool__container')
    toolContainer.append(img, span)

    container.append(toolContainer)
}