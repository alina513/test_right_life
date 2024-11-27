window.addEventListener("load", function () {
  setTimeout(function () {
    var cookiePopup = document.getElementById("cookie-popup");
    cookiePopup.style.display = "block";
  }, 5000);
});
document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    document.getElementById("cookie-popup").style.display = "none";
  });
