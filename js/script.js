var feedbackButton = document.getElementById("feedbackButton");
var popup = document.getElementById("popup");
var closeButton = document.getElementById("popup-close-button");

feedbackButton.addEventListener("click", function (e) {
  e.preventDefault();    
  popup.classList.add("modal-show");
});

closeButton.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("modal-show");
});

