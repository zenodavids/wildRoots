let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
}

document.querySelector('#close-navbar').onclick = () => {
  navbar.classList.remove('active')
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}

let slides = document.querySelectorAll('.home .slide')
let index = 0

function next() {
  slides[index].classList.remove('active')
  index = (index + 1) % slides.length
  slides[index].classList.add('active')
}

function prev() {
  slides[index].classList.remove('active')
  index = (index - 1 + slides.length) % slides.length
  slides[index].classList.add('active')
}

var swiper = new Swiper('.products-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})

var swiper = new Swiper('.arrivals-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})

var swiper = new Swiper('.reviews-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
})

var swiper = new Swiper('.blogs-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
})

// back to top

var scrollToTopBtn = document.querySelector('.scrollToTopBtn')
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if (rootElement.scrollTop / scrollTotal > 0.2) {
    // Show button
    scrollToTopBtn.classList.add('showBtn')
  } else {
    // Hide button
    scrollToTopBtn.classList.remove('showBtn')
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
scrollToTopBtn.addEventListener('click', scrollToTop)
document.addEventListener('scroll', handleScroll)

// back to top end
