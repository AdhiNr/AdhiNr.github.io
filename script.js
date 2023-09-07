function hasClass(element, cls) {
  return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}
document.body.addEventListener("click", function (e) {
  let navbar = document.querySelector(".navbar-toggler");
  let nav = document.getElementById("navbarNav");
  if (hasClass(nav, "show")) {
    navbar.click();
  }
});

function sendMail() {
  var body = "Name: " + document.getElementById("name").value + "\n";
  body += "Phone: " + document.getElementById("phone").value + "\n";
  body += "Message: " + document.getElementById("message").value + "\n";

  var link =
    "mailto:adinurahman86@gmail.com" +
    "?subject=" +
    encodeURIComponent("Contact Me") +
    "&body=" +
    encodeURIComponent(body);
  window.location.href = link;
}
