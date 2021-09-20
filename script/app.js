/** @format */
AOS.init({
  offset: 0,
  disable: "mobile",
});

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
