  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('body').classList.remove('loading');
  });


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