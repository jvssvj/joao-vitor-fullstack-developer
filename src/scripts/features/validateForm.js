export function validateForm() {
    const form = document.querySelector('.footer__form')

    form.addEventListener('submit', (e) => {
        const name = document.querySelector('#name')
        const email = document.querySelector('#email')
        const message = document.querySelector('#message')

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!name.value.trim()) {
            alert('Por favor, preencha o seu nome.')
            name.focus()
            e.preventDefault()
            return
        }

        if (!email.value.trim() || !emailRegex.test(email.value)) {
            alert('Por favor, insira um e-mail válido.')
            email.focus()
            e.preventDefault()
            return
        }

        if (!message.value.trim()) {
            alert('Por favor, escreva uma mensagem.')
            message.focus()
            e.preventDefault()
            return
        }
    })
}