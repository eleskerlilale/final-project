$(document).ready(function () {
  $(".company-carousel").owlCarousel({
    margin: 10,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 5,
      }
    },
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
  });
  $(".feedbacks").owlCarousel({
    margin: 10,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      }
    },
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
  });
});

const nav = document.querySelector("nav")
const menuList = document.querySelector(".menu-list")
const resMenuList = document.querySelector(".res-menu-list")
const resMenuListPElem = document.querySelector(".res-menu-list p")
const menuButton = document.querySelector(".menu")
const subNav = document.querySelectorAll(".sub-nav")
const movieSub = document.querySelectorAll(".movie-sub")
const subNavSecond = document.querySelector(".sub-nav-second")
const accountA=document.querySelector(".search a")
const accountback=document.querySelector(".search")

network.getfetchaccount().then(data => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  accountA.innerHTML=`${data[0].username[0].toUpperCase()}`
  accountback.style.backgroundColor='#'+randomColor
})

movieSub.forEach((movieSub, i) => {
  movieSub.addEventListener("click", () => {
    if (movieSub.classList.value == 'movie-sub') {
      subNav[i].style.maxHeight = '150px'
      movieSub.style.color = ' #d96c2c'
      movieSub.classList.add("active")
    } else {
      subNav[i].style.maxHeight = '0'
      movieSub.style.color = 'white'
      movieSub.classList.remove("active")
    }
  })
})
menuButton.addEventListener("click", () => {
  menuList.style.zIndex = '110'
  resMenuList.style.left = '0'
})
resMenuListPElem.addEventListener("click", () => {
  menuList.style.zIndex = '-10'
  resMenuList.style.left = '-300px'
})

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    nav.style.backgroundColor = "black"
  } else {
    nav.style.backgroundColor = "transparent"
  }
})

window.addEventListener("load", () => {
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    nav.style.backgroundColor = "black"
  } else {
    nav.style.backgroundColor = "transparent"
  }
})

