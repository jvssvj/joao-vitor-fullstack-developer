export function validateForm() {
    const form = document.querySelector('.footer__form')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const name = document.querySelector('#name')
        const email = document.querySelector('#email')
        const message = document.querySelector('#message')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        // Validação
        if (!name.value.trim()) {
            alert('Por favor, preencha o seu nome.')
            name.focus()
            return
        }

        if (!email.value.trim() || !emailRegex.test(email.value)) {
            alert('Por favor, insira um e-mail válido.')
            email.focus()
            return
        }

        if (!message.value.trim()) {
            alert('Por favor, escreva uma mensagem.')
            message.focus()
            return
        }

        // Envio via fetch para Formspree
        try {
            const response = await fetch('https://formspree.io/f/mnnvqqlg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: message.value
                })
            })

            if (response.ok) {
                alert('Mensagem enviada com sucesso!')
                form.reset()
            } else {
                alert('Erro ao enviar. Tente novamente.')
            }
        } catch (error) {
            alert('Erro ao enviar o formulário. Verifique sua conexão.')
        }
    })
}
