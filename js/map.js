var map = document.querySelector(".modal-map");
var link = document.querySelector(".map-link");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close-map");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
  map.classList.add("modal-animation-show");
  overlay.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  map.classList.remove("modal-animation-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  map.classList.remove("modal-animation-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    map.classList.remove("modal-show");
    map.classList.remove("modal-animation-show");
    overlay.classList.remove("modal-show");
  }
})