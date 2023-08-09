window.onresize = function () {
  let mediumButton = document.querySelector(".medium-button");
  if (window.innerWidth < 1200) {
    // eğer ekran genişliği 800px'den küçükse
    mediumButton.disabled = true;
  } else {
    mediumButton.disabled = false;
  }
};
