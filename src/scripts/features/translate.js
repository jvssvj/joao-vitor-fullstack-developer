import { createProjects } from './createProjects.js'

let currentLanguage = 'pt'
let translations = {}

async function loadTranslations(lang) {
    const res = await fetch('src/data/translate.json')
    translations = await res.json()
    currentLanguage = lang
    applyTranslations()
    await createProjects(lang)
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.')
        let text = translations[currentLanguage]
        for (const key of keys) {
            if (!text) break
            text = text[key]
        }
        if (text) el.textContent = text
    })

    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
        const keys = el.dataset.placeholderI18n.split('.')
        let text = translations[currentLanguage]
        for (const key of keys) {
            if (!text) break
            text = text[key]
        }
        if (text) el.placeholder = text
    })
}

function selectLanguage() {
    const buttons = document.querySelectorAll('.header__nav__language__btn')
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id
            buttons.forEach(b => b.classList.remove('language-active'))
            btn.classList.add('language-active')
            loadTranslations(lang)
        })
    })
}

export function translate() {
    selectLanguage()
    loadTranslations(currentLanguage)
}