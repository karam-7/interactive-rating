const buttons = document.querySelectorAll(".li-btn");
const submitBtn = document.querySelector(".rate-btn");
const ratingSpan = document.querySelector("#rating");
const thankSection = document.querySelector(".thank");
const mainRating = document.querySelector(".main-rating");
const thank = document.querySelector(".thank");

submitBtn.addEventListener("click", function() {
  mainRating.classList.toggle("hidden");
  thank.classList.toggle("hidden");
});


buttons.forEach(button => {
    button.addEventListener("click", function() {
        ratingSpan.textContent = this.textContent;
    });
});

submitBtn.addEventListener("click", function() {
    thankSection.classList.remove("hidden");
    mainRating.classList.display = none
});
