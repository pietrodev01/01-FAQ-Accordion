const buttons = document.querySelectorAll(".question-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //Close buttons
    document.querySelectorAll(".faq-row").forEach((row) => {
      row.querySelector(".text").classList.remove("text-show");
      row.querySelector(".plus").classList.remove("hide");
      row.querySelector(".minus").classList.remove("minus-show");
    });

    const faqRow = button.closest(".faq-row");

    const text = faqRow.querySelector(".text");
    const plus = button.querySelector(".plus");
    const minus = button.querySelector(".minus");

    text.classList.toggle("text-show");
    plus.classList.toggle("hide");
    minus.classList.toggle("minus-show");
  });
});
