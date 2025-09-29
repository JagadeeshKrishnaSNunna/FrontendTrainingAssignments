const faqBtn = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
const arrow = document.querySelector(".arrow");

faqBtn.addEventListener("click", () => {
    faqAnswer.classList.toggle("show");
    arrow.classList.toggle("rotate");
});