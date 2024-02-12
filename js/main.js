// Const Variables
const mainDelay = 5000;

/* Page Loader */
const pageLoader = document.querySelector(".page-loader");

window.addEventListener("load", () => {
  addClass('loaded', pageLoader);
  addClass('loaded', document.body);
});

pageLoader.addEventListener("transitionend", () => {
  pageLoader.remove();
});

/* Toggle Nav Menu */
const navMenuToggler = document.querySelector("header .nav-menu-toggler");
const navMenu = document.querySelector('nav.menu');

navMenuToggler.addEventListener('click', () => {
  if (!navMenuToggler.classList.contains('active')) {
    addClass('active', navMenuToggler);
    addClass('open', navMenu);
    addClass('show-overlay', document.body);
  } else {
    removeClass('active', navMenuToggler);
    removeClass('open', navMenu);
    removeClass('show-overlay', document.body);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('show-overlay')) {
    removeClass('active', navMenuToggler);
    removeClass('open', navMenu);
    removeClass('show-overlay', document.body);
  }
});

/* Create Page Sliders */
window.addEventListener('load', () => {
  createSliders();
});

/* Toggle Website Media (Videos & Audios) */
const allVideos = document.querySelectorAll('video:not(.landing video)');

allVideos.forEach(video => {
  video.addEventListener("click", toggleBackgroundSong);

  video.addEventListener("ended", toggleBackgroundSong);
  
  video.addEventListener("play", () => {
    togglePlayedVideo(video);
  });
});

/* Show Page Content On Scrolling */
window.addEventListener("scroll", showPageContent);

/* Show More Btns */
const showMoreBtns = document.querySelectorAll(".show-more-btn");

showMoreBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleParagraphContent(btn);
  });
});

// Functionality
function addClass(theClass, ele) {
  ele.classList.add(theClass);
}

function removeClass(theClass, ele) {
  ele.classList.remove(theClass);
}

function createSliders() {
  // Main Events Sliders
  const mainEventsSlider = new Swiper('.main-events .swiper', {
    spaceBetween: 20,
    pagination: {
      el: '.main-events-pagination',
      clickable: true,
    },
    autoplay: {
      delay: mainDelay,
    },
  });
  // Events Sliders
  const eventSlider = new Swiper('.events .swiper', {
    spaceBetween: 20,
    autoplay: {
      delay: mainDelay,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  // Zone Images Slider
  const zoneImagesSlider = new Swiper('.zone-images-slider .swiper', {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.zone-images-pagination',
      clickable: true,
    },
    autoplay: {
      delay: mainDelay,
    },
    navigation: {
      nextEl: '.zone-images-slider .next-btn',
      prevEl: '.zone-images-slider .prev-btn',
    },
  });
  // Zones Upcomming Events Slider
  const zonesUpcommingEvents = new Swiper('.events.swiper', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
      delay: mainDelay,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  // Explore More Zones Slider
  const exploreMoreZones = new Swiper('.explore-more-zones .swiper', {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: mainDelay,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.explore-more-zones .next-btn',
      prevEl: '.explore-more-zones .prev-btn',
    },
  });
}

function toggleBackgroundSong() {
  const mainSongAudio = document.getElementById('main-song-audio');
  const video1 = allVideos[0];
  const video2 = allVideos[1];

  setTimeout(() => {
    if (video1.paused && video2.paused) {
      // If both videos are paused, play the background audio
      mainSongAudio.play();
    } else {
        // If either of the videos is playing, pause the background audio
        mainSongAudio.pause();
    }
  }, 500);
}

function togglePlayedVideo(playedVideo) {
  let notPlayedVideos = Array.from(allVideos).filter(video => video != playedVideo);

  notPlayedVideos.forEach(video => video.pause());
}

function showPageContent() {
  const allSections = document.querySelectorAll("section, footer");

  allSections.forEach(sect => {
    if (scrollY >= sect.offsetTop - 100) {
      addClass("show", sect);
    }
  });
}

function toggleParagraphContent(btn) {
  if (document.documentElement.lang === "en" && btn.textContent === "Read More") {
    addClass('open', btn.previousElementSibling);
    btn.textContent = "Read Less";
  } else if (document.documentElement.lang === "en" && btn.textContent === "Read Less") {
    removeClass('open', btn.previousElementSibling);
    btn.textContent = "Read More";
  } else if (document.documentElement.lang === "ar" && btn.textContent === "قراءة المزيد") {
    addClass('open', btn.previousElementSibling);
    btn.textContent = "أقل";
  } else {
    removeClass('open', btn.previousElementSibling);
    btn.textContent = "قراءة المزيد";
  }
}