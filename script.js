// This is the script file for this project, where the actions or the user experience is created using Javascript technology...
// This line is hold a DOM element called nav for further manipulations...
const nav = document.querySelector(".nav");

// These lines are for listening the scroll event in the window and giving the nav section a small animated effect...
window.addEventListener("scroll", fixedNav);

function fixedNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
