const nav = document.querySelector("nav")
const menuList = document.querySelector(".menu-list")
const resMenuList = document.querySelector(".res-menu-list")
const resMenuListPElem = document.querySelector(".res-menu-list p")
const menuButton = document.querySelector(".menu")
const subNav = document.querySelectorAll(".sub-nav")
const movieSub = document.querySelectorAll(".movie-sub")
const movieCategory = document.querySelector(".movie-category")
const subNavSecond = document.querySelector(".sub-nav-second")

// menuList.style.zIndex='-100'
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
movieCategory.addEventListener("click", () => {
  if (movieCategory.classList.value == 'movie-category') {
    subNavSecond.style.maxHeight = '80px'
    movieCategory.style.color = ' #d96c2c'
    movieCategory.classList.add("active")
  }
  else {
    subNavSecond.style.maxHeight = '0'
    movieCategory.style.color = ' white'
    movieCategory.classList.remove("active")
  }
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
  if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
    nav.style.backgroundColor = "black"
  } else {
    nav.style.backgroundColor = "transparent"
  }
})

const id = new URLSearchParams(window.location.search).get("id")
console.log(typeof id);
const filmDetail = document.querySelector(".film-detail")
const body= document.querySelector("body")
const arr = []


network.getfetchById(id).then(data => {
    console.log(data.original_title);
    data.genres.forEach(e => arr.push(e.name))
    console.log(arr);
    filmDetail.innerHTML = `
                <div class="title">
                    <div>
                        <h2>${data.original_title}</h2>
                        <div><p>${arr} </p>/<p> ${data.runtime} mins</p></div>
                    </div>
                    <a href="./tiicket.html">Get Ticket</a>
                </div>
                <div class="trailer">
                    <img src=${data.video_poster}>
                    <span class='trailer-span'><i class="bi bi-caret-right-fill"></i></span>
                </div>
                <div class="description">
                    <h2>Story Line</h2>
                    <p>${data.overview}ahdbbadkjf</p>
                </div>
    `
const videoPlay=document.querySelector(".trailer-span")
videoPlay.addEventListener("click", () => {
    console.log("sdljs");
    const video= document.createElement("div")
    video.classList.add("video")
    document.body.prepend(video)
    video.innerHTML=`
    <i class="bi bi-x-lg"></i>
    <iframe  src="https://www.youtube.com/embed/${data.key}?si=J50oRX8ZcO58lLW2"></iframe>
    `
    const videoClose=document.querySelector(".video i")
    videoClose.addEventListener("click", () => {
        video.remove()
    })
})
})


