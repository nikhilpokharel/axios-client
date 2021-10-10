/** @format */
AOS.init({
  offset: 0,
  disable: true,
});

//custom navigation scrollspy
let scrolling = false;
const links = document.querySelectorAll(".scrollspy-link");
const sections = document.querySelectorAll(".scrollspy-section");
const sideBar = document.querySelector("._asidebar");

window.addEventListener("scroll", () => {
  links.forEach((item) => {
    item.classList.add("_scrolling");
    setTimeout(() => {
      item.classList.remove("_scrolling");
    }, 3000);
  });
});

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
// const modalLauncher = document.querySelector("._launch_modal");
// if (modalLauncher) {
//   const btn = document.createElement("button");
//   btn.setAttribute("data-bs-toggle", "modal");
//   btn.setAttribute("data-bs-target", "#exampleModal");
//   modalLauncher.append(btn);

//   window.onload = () => {
//     btn.click();
//   };
// }

var playButton = document.querySelector("._playIcon");
var video = document.querySelector("#video_exp");
var video_title = document.querySelector("#experience ._desc");
// Event listener for the play/pause button
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();
    video_title.style.display = "none";
    // Update the button text to 'Pause'
    //playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();
    video_title.style.display = "inherit";
    // Update the button text to 'Play'
    //playButton.innerHTML = "Play";
  }
});
// _img_parallax_x;
//parallax effect
const parallaxImagesY = document.querySelectorAll("._parallax_img");

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 992) {
//     parallaxImagesX.classList.remove("_parallax_img");
//     parallaxImagesY.classList.remove("_parallax_img_x");
//   }
// });

// if (parallaxImagesX) {
//   new simpleParallax(parallaxImagesY, {
//     delay: 0.6,
//     transition: "cubic-bezier(0,0,0,1)",
//     scale: 1.2,
//   });
// }

if (parallaxImagesY) {
  new simpleParallax(parallaxImagesY, {
    delay: 0.6,
    scale: 1.2,
  });
}
