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

/* <div class="my-card">
                        <div>
                            <div class="image">
                                <img src="./assets/image/movie-image-12-768x513.jpg" alt="">
                            </div>
                            <div class="text">
                                <div class="category-time">
                                    <p class="category">category </p>
                                    /
                                    <p class="time"> time</p>
                                </div>
                                <div class="film-name">Film name</div>
                                <a href="ticket">Ticket</a>
                            </div>
                        </div>
                    </div> */

const movie=document.querySelector(".movie-all")

network.getfetch().then(data => {
  data.forEach(data => {
    movie.innerHTML=`
    <div class="my-card">
                        <div>
                            <div class="image">
                                <img src=${data.poster_path} alt="">
                            </div>
                            <div class="text">
                                <div class="category-time">
                                    <p class="category"></p>
                                    /
                                    <p class="time"> time</p>
                                </div>
                                <div class="film-name">Film name</div>
                                <a href="ticket">Ticket</a>
                            </div>
                        </div>
                    </div>
    `
  })
})