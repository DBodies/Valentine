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
        document.getElementById("secondTitle").textContent = i18next.t("secondTitle");
        document.getElementById("myName").textContent = i18next.t("myName");
        document.getElementById("secondText").textContent = i18next.t("secondText");
        document.getElementById("educationXAI").textContent = i18next.t("educationXAI");
        document.getElementById("speciality").textContent = i18next.t("speciality");
        document.getElementById("goIT").innerHTML = i18next.t("goIT");
        document.getElementById("lngUaEn").innerHTML = i18next.t("lngUaEn");
        document.getElementById("design").innerHTML = i18next.t("design");
                document.getElementById("btnReadMore").textContent = i18next.t("btnReadMore");
                document.getElementById("btnReadMore").textContent = i18next.t("btnReadMore");
                document.getElementById("secondDscr").textContent = i18next.t("secondDscr");
                document.getElementById("projectDscr").textContent = i18next.t("projectDscr");
                document.getElementById("thirdDscr").textContent = i18next.t("thirdDscr");
                document.getElementById("projectTitle").textContent = i18next.t("projectTitle");
                document.getElementById("additionalSkills").textContent = i18next.t("additionalSkills");
                document.getElementById("sphereSkills").textContent = i18next.t("sphereSkills");
                document.getElementById("mySkillsTitle").textContent = i18next.t("mySkillsTitle");
                document.getElementById("toolsSkills").textContent = i18next.t("toolsSkills");
                document.getElementById("knowledgeSkills").textContent = i18next.t("knowledgeSkills");
        document.getElementById("adaptation").textContent = i18next.t("adaptation");
                document.getElementById("animation").textContent = i18next.t("animation");
                document.getElementById("layot").textContent = i18next.t("layot");
                document.getElementById("interface").textContent = i18next.t("interface");
                document.getElementById("experience").textContent = i18next.t("experience");
                document.getElementById("mobileDesign").textContent = i18next.t("mobileDesign");
                document.getElementById("webDesign").textContent = i18next.t("webDesign");
                document.getElementById("designSystem").textContent = i18next.t("designSystem");
                document.getElementById("projectTitle").textContent = i18next.t("projectTitle");
                document.getElementById("languageSpan").textContent = i18next.t("languageSpan");
                document.getElementById("fifthSectionContact").textContent = i18next.t("fifthSectionContact");
                document.getElementById("fifthSEctionText").textContent = i18next.t("fifthSEctionText");
                document.getElementById("btnSubmit").textContent = i18next.t("btnSubmit");
                document.getElementById("name").setAttribute("placeholder", i18next.t("placeholderName"))
                document.getElementById("email").setAttribute("placeholder", i18next.t("placeholderEmail"))
                document.getElementById("title").setAttribute("placeholder", i18next.t("placeholderTitle"))
        document.getElementById("message").setAttribute("placeholder", i18next.t("placeholderMessage"))
        document.getElementById("cooperate").textContent = i18next.t("cooperate");
        
                        document.getElementById("footerContact").textContent = i18next.t("footerContact");
                        document.getElementById("footerSkills").textContent = i18next.t("footerSkills");
                        document.getElementById("footerProject").textContent = i18next.t("footerProject");
                        document.getElementById("footerAboutMe").textContent = i18next.t("footerAboutMe");
                        document.getElementById("footerHome").textContent = i18next.t("footerHome");
                        document.getElementById("footerNav").textContent = i18next.t("footerNav");
                        document.getElementById("otherWays").textContent = i18next.t("otherWays");
                        document.getElementById("footerValentyn").textContent = i18next.t("footerValentyn");

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
                    "secondTitle": "About me",
                    "myName": "I`m Valentyn",
                    "secondText": "I specialize in UI/UX design for web and mobile applications. As I continue to grow in this field, I strive to bring ideas to life by creating solutions that are not only aesthetically pleasing but also highly functional, simplifying users' everyday tasks.",
                    "educationXAI": "I have a higher education in the field of IT, I graduated from National Aerospace University - Kharkiv Aviation Institute",
                    "speciality": "121 Specialty 121 Software Engineering",
                    "goIT": "Completed UI/UX Designer courses at GoIt <br /> February 2024 - September 2024",
                    "btnReadMore": "Read more",
                "projectDscr": "An app for finding and attending events",
                "secondDscr": "Foreign language learning app",
                "thirdDscr": "A site showing the capabilities of designers",
                    
                    "projectTitle": "My projects",
                    "designSystem": "Design system",
                    "webDesign": "Web design",
                    "mobileDesign": "Mobile design",
                    "experience": "User experience",
                    "interface": "User interface",
                    "layot": "Layout",
                    "animation": "Animation",
                    "adaptation": "Adaptation",
                    "knowledgeSkills": "Knowledge",
                    "toolsSkills": "Tools",
                    "additionalSkills": "Additional knowledge",
                    "design": "UI/UX design<br />Web design",
                    "sphereSkills": "Sphere",
                    "lngUaEn": "Ukrainian<br />English",
                    "mySkillsTitle": "Languages",
                    "languageSpan": "Languages",
                    "fifthSectionContact": "Contact",
                    "fifthSEctionText": "I consider the possibility of working in the office, as well as can work on freelance, as well as can take orders",
                    "placeholderName": "Enter your name",
                    "placeholderEmail": "Enter your email",
                    "placeholderTitle": "Enter title",
                    "placeholderMessage": "Enter your message",
                    "btnSubmit": "Submit",
                    "footerValentyn": "Valentyn",
                    "otherWays": "other ways to contact me",
                    "footerNav": "Site navigation",
                    "footerHome": "Home",
                    "footerAboutMe": "About me",
                    "footerProject": "My projects",
                    "footerSkills": "My skills",
                    "footerContact": "Contact",
                    "cooperate": "I will be glad to cooperate",
                    
                },
            },
            ua: {
                translation: {
                    "animatedText":"Гарний дизайн - це про ставлення. Він повинен вирішувати проблеми, а не створювати їх.",
                    "firstName": "Валентин",
                    "myHome": "Головна",
                    "aboutMe": "Про мене",
                    "myProjects": "Проекти",
                    "mySkills": "Навички",
                    "myContact": "Контакти",
                    "toggleButton": "EN",
                    "btnContacbtn": "Контакти",
                     "neelov": "НЕЄЛОВ",
                "valentyn": "ВАЛЕНТИН",
                "textUnderName": "Я junior UI/UX Designer. Я вмію та знаю, як створювати сучасні дизайни вебсайтів і мобільних додатків, а також як їх налаштовувати",
                "contactMe": "Зв'язатися зі мною",
                    "openToWork": "Готовий до співпраці",
                    "secondTitle": "Про мене",
                    "myName": "Я Валентин",
                    "secondText": "Я спеціалізуюся на UI/UX дизайні для веб- та мобільних додатків. Продовжуючи розвиватися в цій сфері, я втілюю ідеї в життя, створюючи рішення, які є естетично привабливими та максимально функціональними, спрощуючи повсякденні завдання користувачів.",
                    "educationXAI": "Маю вищу освіту в сфері ІТ. Закінчив Національний аерокосмічний університет.",
                    "speciality": "Спеціальність 121 Інженерія програмного забезпечення",
                    "goIT": "Пройшов курс UI/UX дизайну в GoIt <br /> (лютий 2024 — вересень 2024).",     
                "btnReadMore": "Про курс",
                "projectDscr": "Додаток для пошуку та відвідування заходів",
                "secondDscr": "Додаток для вивчення іноземних мов",
                "thirdDscr": "Сайт, що демонструє можливості дизайнерів",
                    "projectTitle": "Мої проєкти",
                 "designSystem": "Дизайн системи",
                 "webDesign": "Вебдизайн",
                 "mobileDesign": "Мобільний дизайн",
                 "experience": "Досвід користувача",
                    "interface": "Інтерфейс користувача",
                    "layot": "Верстка",
                    "animation": "Анімація",
                    "adaptation": "Адаптація",
                    "knowledgeSkills": "Знання",
                    "toolsSkills": "Інструменти",
                    "additionalSkills": "Додаткові знання",
                    "design": "UI/UX дизайн <br /> Вебдизайн",
                    "sphereSkills": "Отрасль",
                    "lngUaEn": "Українська <br />Англійська",
                    "mySkillsTitle": "Мої навички",
                   "languageSpan": "Мови",
                    "fifthSectionContact": "Контакти",
                    "fifthSEctionText": "Розглядаю можливість роботи в офісі, а також можу працювати на фрилансі та виконувати замовлення",
                    
                    "placeholderName": "Введіть ваше ім'я",
                    "placeholderEmail": "Введіть вашу електронну пошту",
                    "placeholderTitle": "Введіть заголовок",
                    "placeholderMessage": "Введіть ваше повідомлення",
                    "btnSubmit": "Надіслати",
                    "footerValentyn": "Валентин",
                    "otherWays": "Способи зв'язку",
                    "footerNav": "Навігація сайтом",
                    "footerHome": "Головна",
                    "footerAboutMe": "Про мене",
                    "footerProject": "Мої проєкти",
                    "footerSkills": "Мої навички",
                    "footerContact": "Контакти",
                    "cooperate": "Буду радий співпраці",
                 
                },
            },
        },
        interpolation: { escapeValue: false }
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

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault()
    emailjs.sendForm("service_ec1wczl", "template_77kid0h", this, "qGxawfmwbh2QPuvVF")
        .then(
            (response) => {
                console.log("SUCCESS!", response)
                if(response && response.status === 200) {
                    alert("your message has been sent")
                } else {
                    alert("Sending went wrong")
                    }
            },
            (error) => {
                console.log("FAILED...", error)
                alert("Sending error")
                }
    )
    this.reset()
})
