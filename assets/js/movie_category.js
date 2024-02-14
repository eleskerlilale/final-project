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
  accountA.innerHTML=`${data[0].username[0].toUpperCase()}`
  accountback.style.backgroundColor='#'+`${data[0].color}`
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

const movieAllBannerP=document.querySelector(".movie-all-banner p")
const movieAllBannerH1=document.querySelector(".movie-all-banner h1")
const genres=new URLSearchParams(window.location.search).get("genres")

movieAllBannerH1.innerText=`${genres}`
movieAllBannerP.innerText=`${genres}`
const action = document.querySelector(".playing")
network.getfetch().then((data) => {
    let arr=[genres];
    console.log(arr);
    data.forEach(elem => {
        elem.genres.forEach(e => {
            if(arr.length <=1 && e.name!=genres){
                arr.push(e.name)
            }
            if(e.name==genres){
                // console.log(elem);
                action.innerHTML+=`
                <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-1">
                <div>
                    <div class="image">
                        <img src="${elem.poster_path}" alt="">
                    </div>
                    <div class="text">
                        <div class="category-time">
                            <p class="category">${arr}</p>
                            /
                            <p class="time">${elem.runtime} min</p>
                        </div>
                        <div class="film-name" onclick="detailFunc(${elem.id})">Film name</div>
                        <a href="./ticket.html?id=${elem.id}">Ticket</a>
                    </div>
                </div>
            </div>
                `
                arr=[genres]
            }
        })
    })
})
function detailFunc(id){
  window.location=`./detail.html?id=${id}`
}