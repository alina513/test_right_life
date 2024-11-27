const input = document.querySelector("#phone");
intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    fetch("https://ipinfo.io/json?token=3f8b6d94b6e89c")
      .then((resp) => resp.json())
      .then((data) => callback(data.country))
      .catch(() => callback("us"));
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // Для форматування
});
