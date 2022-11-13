
const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal_body");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector('a[href*="#open_modal"]');
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);




var modal_window = document.querySelector('.flex');
console.log(modal_window);

modal_window.onmousedown = function(e) {

  var coords = getCoords(modal);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  modal.style.position = 'absolute';
  document.body.appendChild(modal);
  moveAt(e);

  modal.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    modal.style.left = e.pageX - shiftX + 'px';
    modal.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  modal_window.onmouseup = function() {
    document.onmousemove = null;
    modal_window.onmouseup = null;
  };

}

modal_window.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}