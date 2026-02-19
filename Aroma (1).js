function openPopup(title, description) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-desc").innerText = description;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onclick = function(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
}
