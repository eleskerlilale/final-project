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

const action = document.querySelector(".playing")
network.getfetch().then((data) => {
    let arr=["Fantasy"];
    data.forEach(elem => {
        elem.genres.forEach(e => {
            if(arr.length <=1 && e.name!='Fantasy'){
                arr.push(e.name)
            }
            if(e.name=='Fantasy'){
                console.log(elem);
                action.innerHTML+=`
                <div class="my-card col-lg-3 col-md-4 col-sm-2 col-xs-1">
                <div>
                    <div class="image">
                        <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${elem.poster_path}" alt="">
                    </div>
                    <div class="text">
                        <div class="category-time">
                            <p class="category">${arr}</p>
                            /
                            <p class="time">${elem.runtime} min</p>
                        </div>
                        <div class="film-name">Film name</div>
                        <a href="ticket">Ticket</a>
                    </div>
                </div>
            </div>
                `
                console.log(arr);
                arr=["Fantasy"]
            }
        })
    })
})