const main = document.querySelectorAll(".card-main div")
const cardAccordion = document.querySelector(".card-accordion")
const accordionButton=document.querySelectorAll(".accordion-button")
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


main.forEach((elem, i) => {
  elem.addEventListener("click", () => {
    if (i == 0) {
      elem.classList.add("active")
      main[1].classList.remove("active")
      main[2].classList.remove("active")
      main[3].classList.remove("active")
      accordionButton[0].innerText=`Should I use internal employees or hire professional actors in my video?`
      accordionButton[1].innerText=`When does a certain movie come out on dvd?`
      accordionButton[2].innerText=`How do I submit ideas or scripts to be considered?`
      accordionButton[3].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[4].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[5].innerText=`Preparation of documents required for the planned route?`
      accordionButton[6].innerText=`How can I watch digiflex on my TV?`
      accordionButton[7].innerText=`How do I access the movix account?`        
    }
    else if(i==1){
      elem.classList.add("active")
      main[0].classList.remove("active")
      main[2].classList.remove("active")
      main[3].classList.remove("active")
      accordionButton[0].innerText=`When does a certain movie come out on dvd?`
      accordionButton[1].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[2].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[3].innerText=`Preparation of documents required for the planned route?`
      accordionButton[4].innerText=`How do I submit ideas or scripts to be considered?`
      accordionButton[5].innerText=`How can I watch digiflex on my TV?`
      accordionButton[6].innerText=`How do I access the movix account?`
      accordionButton[7].innerText=`Should I use internal employees or hire professional actors in my video?`        
    }
    else if(i==2){
      elem.classList.add("active")
      main[1].classList.remove("active")
      main[0].classList.remove("active")
      main[3].classList.remove("active")
      accordionButton[0].innerText=`How do I submit ideas or scripts to be considered?`
      accordionButton[1].innerText=`How can I watch digiflex on my TV?`
      accordionButton[2].innerText=`How do I access the movix account?`
      accordionButton[3].innerText=`Should I use internal employees or hire professional actors in my video?`
      accordionButton[4].innerText=`When does a certain movie come out on dvd?`
      accordionButton[5].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[6].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[7].innerText=`Preparation of documents required for the planned route?`        
    }
    else{
      elem.classList.add("active")
      main[1].classList.remove("active")
      main[2].classList.remove("active")
      main[0].classList.remove("active")
      accordionButton[0].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[1].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[2].innerText=`How do I access the movix account?`
      accordionButton[3].innerText=`When does a certain movie come out on dvd?`
      accordionButton[4].innerText=`Should I use internal employees or hire professional actors in my video?`
      accordionButton[5].innerText=`How can I watch digiflex on my TV?`
      accordionButton[6].innerText=`Preparation of documents required for the planned route?`
      accordionButton[7].innerText=`How can I watch digiflex on my TV?`        
    }
  })
})
