links = document.getElementById("links");
hamBtn = document.getElementById("ham-btn");

hamBtn.addEventListener("click", function () {
  links.classList.toggle("hidden");
  hamBtn.classList.toggle("fa-x");
});
