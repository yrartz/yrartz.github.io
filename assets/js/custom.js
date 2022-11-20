const navbar = document.querySelector("nav")

window.onscroll = function() {
  if (window.scrollY > 1) {
    navbar.classList.add("shadow")
  } else {
    navbar.classList.remove("shadow")
  }
}