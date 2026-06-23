"use strict";

/* =========================
   ANIMACIONES (FADE-UP)
========================= */
const animatedElements = document.querySelectorAll(".fade-up");

const appearObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => {
  appearObserver.observe(el);
});


/* =========================
   VIDEOS REELS (CONTROL USUARIO)
========================= */
const videos_realtor = document.querySelectorAll(".reel-video");

videos_realtor.forEach(video => {

  // cuando el usuario reproduce un video
  video.addEventListener("play", () => {

    // pausar todos los demás
    videos_realtor.forEach(v => {
      if (v !== video) {
        v.pause();
      }
    });

  });

});









const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Menu mobil
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// cerrar al hacer click fuera
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});





/* =========================
   VIDEOS REELS (CONTROL USUARIO)
========================= */
const videos = document.querySelectorAll(".realtor-video");

videos.forEach(video => {

  // cuando el usuario reproduce un video
  video.addEventListener("play", () => {

    // pausar todos los demás
    videos.forEach(v => {
      if (v !== video) {
        v.pause();
      }
    });

  });

});

