document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "../HTML/thanks.html";
    document.getElementById("contact-form").reset();
  });
