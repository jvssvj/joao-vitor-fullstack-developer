export function renderTools(techImg, techName) {
    const container = document.querySelector('.techs')
    const techContainer = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    img.src = techImg
    img.alt = `${techName} image`
    img.classList.add('tech__image')
    img.ariaHidden = true

    span.textContent = techName
    span.classList.add('tech__name')

    techContainer.classList.add('tech__container')
    techContainer.append(img, span)

    container.append(techContainer)
}