// Get modal element
var modal = document.getElementById("simpleModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close modal button
var closeBtn = document.getElementById("closeBtn");

// Even listeners
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutsideClose);

// Open the modal function
function openModal() {
  modal.style.display = "block";
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Click outside of modal to close
function clickOutsideClose(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
