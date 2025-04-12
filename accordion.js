const buttons = document.querySelectorAll(".question-button");

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    const faqRow = e.closest(".faq-row");

    const text = faqRow.querySelector(".text");
    const plus = e.querySelector(".plus");
    const minus = e.querySelector(".minus");

    text.classList.toggle("text-show");
    plus.classList.toggle("hide");
    minus.classList.toggle("minus-show");
  });
});
