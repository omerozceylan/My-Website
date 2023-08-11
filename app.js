let archiveDiv = document.querySelector(".archive-side");
let archiveButton = document.querySelector(".archive-button");
let archiveInfo = document.querySelector(".archive-section");
let closeButton = document.querySelector(".close-button");

window.onresize = function () {
  let mediumButton = document.querySelector(".medium-button");
  if (window.innerWidth < 1200) {
    // if screen width is less than 1200px
    mediumButton.disabled = true;
  } else {
    mediumButton.disabled = false;
  }
};

archiveButton.addEventListener(`click`, toggleArchive);
closeButton.addEventListener("click", closeArchivedSide);

function closeArchivedSide() {
  archiveDiv.classList.toggle("hidden");
  archiveInfo.classList.toggle("hidden");
}

function toggleArchive() {
  archiveDiv.classList.toggle("hidden");
  archiveInfo.classList.add("hidden");
}
