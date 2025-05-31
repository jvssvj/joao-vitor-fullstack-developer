let currentLanguage = 'pt'
let translations = {}

async function loadTranslations(lang) {
    const response = await fetch('src/data/translate.json')
    const data = await response.json()
    translations = data
    currentLanguage = lang
    applyTranslations()
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const keys = element.getAttribute('data-i18n').split('.')
        let translation = translations[currentLanguage]
        for (const key of keys) {
            if (translation) translation = translation[key]
        }
        if (translation) element.textContent = translation
    })

    document.querySelectorAll('[data-placeholder-i18n]').forEach((element) => {
        const keys = element.getAttribute('data-placeholder-i18n').split('.')
        let translation = translations[currentLanguage]
        for (const key of keys) {
            if (translation) translation = translation[key]
        }
        if (translation) element.placeholder = translation
    })
}

function selectLanguage() {
    const ptBtn = document.getElementById('pt')
    const enBtn = document.getElementById('en')
    const langButtons = document.querySelectorAll('.header__nav__language__btn')

    ptBtn.addEventListener('click', () => loadTranslations('pt'))
    enBtn.addEventListener('click', () => loadTranslations('en'))

    langButtons.forEach(btn => {
        if (btn.textContent == 'PT') {
            //iniciar ativo
            btn.classList.add('language-active')
        }

        btn.addEventListener('click', () => {
            // Remove de todos os botões
            langButtons.forEach(b => b.classList.remove('language-active'))

            // Adiciona ao botão clicado
            btn.classList.add('language-active')
        })
    })
}


export function translate() {
    loadTranslations(currentLanguage)
    selectLanguage()
}
// Carrega o idioma padrão (português) ao iniciar



