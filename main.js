window.onload = function() {
  document.querySelector('body').classList.remove('loading');
};

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault()
})

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("animatedInput");
    let index = 0;
    let isDeleting = false;
    let text = "";

    function typeEffect() {
        if (!isDeleting) {
            input.value = text.substring(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeEffect, 5000);
                return;
            }
        } else {
            input.value = text.substring(0, index);
            index--;
            if (index === 0) {
                isDeleting = false;
                setTimeout(typeEffect, 1500);
                return;
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    function updateTexts() {
        document.getElementById("firstName").textContent = i18next.t("firstName");
        document.getElementById("myHome").textContent = i18next.t("myHome");
        document.getElementById("aboutMe").textContent = i18next.t("aboutMe");
        document.getElementById("myProjects").textContent = i18next.t("myProjects");
        document.getElementById("mySkills").textContent = i18next.t("mySkills");
        document.getElementById("myContact").textContent = i18next.t("myContact");
        document.getElementById("btnContacbtn").textContent = i18next.t("btnContacbtn");
        document.getElementById("btnSwitcher").textContent = i18next.t("toggleButton");
                document.getElementById("neelov").textContent = i18next.t("neelov");
                document.getElementById("valentyn").textContent = i18next.t("valentyn");
                document.getElementById("contactMe").textContent = i18next.t("contactMe");
                document.getElementById("textUnderName").textContent = i18next.t("textUnderName");
                document.getElementById("openToWork").textContent = i18next.t("openToWork");

        // Обновляем текст анимации
        text = i18next.t("animatedText");
        index = 0;
        isDeleting = false;
        typeEffect();
    }

    // Инициализация i18next
    i18next.init({
        lng: "en",
        resources: {
            en: {
                translation: {
                    "animatedText": "Good design is as much about form as it is about attitude. It should solve problems, not create them.",
                    "firstName": "Valentyn",
                    "myHome": "Home",
                    "aboutMe": "About me",
                    "myProjects": "My Projects",
                    "mySkills": "My Skills",
                    "myContact": "Contact",
                    "toggleButton": "UA",
                    "btnContacbtn": "Contact",
                                    "neelov": "NEELOV",
                "valentyn": "VALENTYN",
                "textUnderName": "I'm a junior UI/UX Designer. I can and know how to create modern website designs mobile apps, know how to customize them",
                "contactMe": "Contact me",
                "openToWork": "Open to work",
                    
                },
            },
            ua: {
                translation: {
                    "animatedText": "Гарний дизайн - це не тільки форма, а й ставлення. Він повинен вирішувати проблеми, а не створювати їх.",
                    "firstName": "Валентин",
                    "myHome": "Головна",
                    "aboutMe": "Про мене",
                    "myProjects": "Проекти",
                    "mySkills": "Навички",
                    "myContact": "Контакти",
                    "toggleButton": "EN",
                    "btnContacbtn": "Контакти",
                     "neelov": "NEELOV",
                "valentyn": "VALENTYN",
                "textUnderName": "Я junior UI/UX Designer. Я вмію та знаю, як створювати сучасні дизайни вебсайтів і мобільних додатків, а також як їх налаштовувати",
                "contactMe": "Зв'язатися зі мною",
                "openToWork": "Готовий до співпраці",
                },
            },
        },
    }, function () {
        updateTexts();
    });

    document.getElementById("btnSwitcher").addEventListener("click", function () {
        const newLang = i18next.language === "en" ? "ua" : "en";
        i18next.changeLanguage(newLang, function () {
            updateTexts();
        });
    });
});
