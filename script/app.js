/** @format */
AOS.init({
  offset: 0,
  disable: "mobile",
});

//custom navigation scrollspy
const links = document.querySelectorAll(".scrollspy-link");
const sections = document.querySelectorAll(".scrollspy-section");
const sideBar = document.querySelector("._asidebar");

links.forEach((link) => {
  link.onclick = () => {
    sections.forEach((section) => {
      if (link.dataset.target === section.id) {
        document.documentElement.scrollTop = section.offsetTop;
      }
    });
  };
});
window.onscroll = () => scrollspy();
window.onresize = () => scrollspy();
const scrollspy = () => {
  const pageYPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  sections.forEach((section) => {
    const sectionYPosition = section.offsetTop;
    if (pageYPosition > sectionYPosition - 60) {
      links.forEach((link) => {
        if (link.dataset.target === section.id) {
          links.forEach((item) => item.classList.remove("_active"));
          if (
            link.getAttribute("data-target") == "versatility" ||
            link.getAttribute("data-target") == "sustanability" ||
            link.getAttribute("data-target") == "specifications" ||
            link.getAttribute("data-target") == "specifications_2" ||
            link.getAttribute("data-target") == "compose"
          ) {
            sideBar.classList.add("_dark");
          } else {
            sideBar.classList.remove("_dark");
          }
          link.classList.add("_active");
        }
      });
    }
  });
};
scrollspy();

//page-popup
const modalLauncher = document.querySelector("._launch_modal");
if (modalLauncher) {
  const btn = document.createElement("button");
  btn.setAttribute("data-bs-toggle", "modal");
  btn.setAttribute("data-bs-target", "#exampleModal");
  modalLauncher.append(btn);

  window.onload = () => {
    btn.click();
  };
}

//this code is for optional purpose only you can delete this code directly in production
//for navigation shortcuts
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "PageUp":
      window.location = "/axiom.html";
      break;

    case "PageDown":
      window.location = "/";
      break;
    default:
      return;
  }
});

//parallax effect
const parallaxImagesY = document.querySelectorAll("._parallax_img");
const parallaxImagesX = document.querySelectorAll("._parallax_img_x");
if (parallaxImagesX) {
  new simpleParallax(parallaxImagesY, {
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
    overflow: true,
    scale: 1.2,
  });
}

if (parallaxImagesY) {
  new simpleParallax(parallaxImagesX, {
    delay: 0.6,
    orientation: "right",
    scale: 1.2,
  });
}
