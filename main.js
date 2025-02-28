window.onload = function() {
  document.querySelector('body').classList.remove('loading');
};

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault()
})

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("animatedInput")
const text = "Good design is as much about form as it is about attitude. It should solve problems, not create them"
let index = 0
let isDeleting = false
function typeEffect() {
    if (!isDeleting) {
        input.value = text.substring(0, index)
        index++
        if (index > text.length) {
            isDeleting = true
            setTimeout(typeEffect, 5000)
            return
        }
    } else {
        input.value = text.substring(0, index)
        index--
        if (index === 0) {
            isDeleting = false
            setTimeout(typeEffect, 1500)
            return
        }
    }
    setTimeout(typeEffect,isDeleting ? 50 : 100)
}
typeEffect()
})
i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "firstName": "Valentyn",
                "myHome": "Home",
                "aboutMe": "About me",
                "myProjects": "My Projects",
                "mySkills": "My Skills",
                "myContact": "Contact",
                "toggleButton": "UA",
                "btnContacbtn": "Contact"
            }
        },
        ua: {
            translation: {
                                "firstName": "Валентин",
                "myHome": "Головна",
                "aboutMe": "Про мене",
                "myProjects": "Проекти",
                "mySkills": "Навички",
                "myContact": "Контакти",
                "toggleButton": "EN",
                "btnContacbtn": "Контакти"
            }
        }
    }
}, function (ett, t) {
    document.getElementById('firstName').textContent = i18next.t('firstName')
    document.getElementById('myHome').textContent = i18next.t('myHome')
    document.getElementById('aboutMe').textContent = i18next.t('aboutMe')
    document.getElementById('myProjects').textContent = i18next.t('myProjects')
    document.getElementById('mySkills').textContent = i18next.t('mySkills')
    document.getElementById('myContact').textContent = i18next.t('myContact')
    document.getElementById('btnSwitcher').textContent = i18next.t('toggleButton')
    document.getElementById('btnContacbtn').textContent = i18next.t('btnContacbtn')
})

document.getElementById('btnSwitcher').addEventListener('click', function () {
    const newLang = i18next.language === 'en' ? 'ua' : 'en'
    i18next.changeLanguage(newLang, function (err, t) {
            document.getElementById('firstName').textContent = i18next.t('firstName')
    document.getElementById('myHome').textContent = i18next.t('myHome')
    document.getElementById('aboutMe').textContent = i18next.t('aboutMe')
    document.getElementById('myProjects').textContent = i18next.t('myProjects')
    document.getElementById('mySkills').textContent = i18next.t('mySkills')
    document.getElementById('myContact').textContent = i18next.t('myContact')
    document.getElementById('btnContacbtn').textContent = i18next.t('btnContacbtn')
    document.getElementById('btnSwitcher').textContent = i18next.t('toggleButton')
    })
})