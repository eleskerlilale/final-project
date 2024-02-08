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

const id = new URLSearchParams(window.location.search).get("id")
const filmDetail = document.querySelector(".film-detail")
const body= document.querySelector("body")
const movieBanner=document.querySelector("#movie-all-banner")
const filmName=document.querySelector(".film-name")
const h1=document.querySelector("h1")
const arr = []


network.getfetchById(id).then(data => {
    filmName.innerText= `${data.original_title}`
    h1.innerText=`${data.original_title}`
    console.log(data.original_title);
    data.genres.forEach(e => arr.push(e.name))
    console.log(arr);
    movieBanner.style.backgroundImage=`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)), url(${data.video_poster})`
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
                    <div class='watch-text'> Watch the Trailer<i class="bi bi-arrow-up-right"></i></div>

                </div>
                <div class="cast">
                <h2>Top Cast</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-01.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>Millie Brown</h3>
                                <p>as Eleven</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-02.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>Finn Wolfhard</h3>
                                <p>as Mike Wheeler</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-03.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>Winona Ryder</h3>
                                <p>as Joyce Byers</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-04.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>David Harbour</h3>
                                <p>as Jim Hopper</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-05.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>Gaten Matarazo</h3>
                                <p>as Ted Wheeler</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-06.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>Natalia Dyer</h3>
                                <p>as Nancy Wheeler</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-07.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>Caleb Laughlin</h3>
                                <p>as Lucas Sinclair</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-2">
                        <div class="card">
                            <div class="image">
                                <img src="./assets/image/cast-08.jpg" alt="">
                            </div>
                            <div class="name">
                                <h3>Sadie Sink</h3>
                                <p>as Max Mayfield</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="description">
                    <h2>Story Line</h2>
                    <p>${data.overview}</p>
                </div>
            `
const videoPlay=document.querySelector(".trailer-span")
videoPlay.addEventListener("click", () => {
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


