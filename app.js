window.onresize = function () {
  let mediumButton = document.querySelector(".medium-button");
  if (window.innerWidth < 1200) {
    // if screen width is less than 1200px
    mediumButton.disabled = true;
  } else {
    mediumButton.disabled = false;
  }
};

let archiveDiv = document.querySelector(".archive-side");
let archiveButton = document.querySelector(".archive-button");
let archiveInfo = document.querySelector(".archive-section");

archiveButton.addEventListener(`click`, toggleArchive);

function toggleArchive() {
  archiveDiv.classList.toggle("hidden");
  archiveInfo.classList.add("hidden");
}
