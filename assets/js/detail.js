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
                    <a href="./tiicket.html?id=${data.id}">Get Ticket</a>
                </div>
                <div class="row row-image">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="trailer">
                        <img src=${data.video_poster}>
                        <span class='trailer-span'><i class="bi bi-caret-right-fill"></i></span>
                        <div class='watch-text'> Watch the Trailer<i class="bi bi-arrow-up-right"></i></div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="card" onclick='imageFunc(${data.id})'>
                            <img src='${data.image[0]}'>
                            <span>${data.image.length}+</span>
                        </div>
                    </div>
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
const imageId=document.querySelector("#image")
const image=document.querySelector(".images")
const imageClose=document.querySelector(".image-close")
function imageFunc(id){
    imageId.style.display='flex'
}
imageClose.addEventListener("click" ,() => {
    imageId.style.display="none"
})
let arrimage = []
network.getfetchById(id).then((data) => {
      arrimage = data;
      printData();
      $(document).ready(function () {
        $(".images").owlCarousel({
          margin: 10,
          dots: true,
          loop: true,
          responsive: {
            0: {
              items: 1,
            }
          }
        });
    })
})

const printData = ()=> {
    console.log(arrimage.image);
    arrimage.image.forEach(elem => {
        console.log(elem);
        image.innerHTML+=`
        <div class="item">
            <div>
                <img src='${elem}' alt="">
            </div>
        </div>  `
    })
   
}