const card = document.querySelector(".blog .card")
const firstBox = document.querySelector(".latest-box")
const secondBox = document.querySelector(".category-box")
const p=document.querySelector(".movie-all-banner p")
const h1=document.querySelector(".movie-all-banner h1")

card.innerHTML = ``
firstBox.innerHTML = ``
// secondBox.innerHTML = ``
let count = 0
network.getblog().then(data => {
    data.forEach(elem => {
        card.innerHTML += `
        <div class="box">
        <div class="image">
            <img src=${elem.image} alt="">
        </div>
        <div class="text">
            <h2><a onclick='blogDetailFunc(${elem.id})'>${elem.blog_name}</a></h2>
            <div class="status">
                <div class="date">
                    <i class="bi bi-calendar3"></i>
                    ${elem.date}
                </div>
                <div class="list">
                    <i class="bi bi-folder"></i>
                    ${elem.list}
                </div>
                <div class="people">
                    <i class="bi bi-person-fill"></i>
                    ${elem.people}
                </div>
            </div>
            <div class="desciption">
            ${elem.description}
            </div>
        </div>
        <a href="./blog_detail.html?id=${elem.id}">Read More</a>
    </div>
    `

        if (count < 3) {
            count++
            firstBox.innerHTML += `
        <div class="block" onclick='blogDetailFunc(${elem.id})'>
            <div class="image">
                <img src=${elem.image} alt="">
            </div>
            <div>
                <div class="people">
                    <i class="bi bi-person-fill"></i>
                    ${elem.people}
                </div>
                <h4>${elem.blog_name}</h4>
            </div>
        </div>
        `
        }
    })
})

function blogDetailFunc(id){
    window.location=`./blog_detail.html?id=${id}`
}

const list=new URLSearchParams(window.location.search).get("list")
console.log(list);

if(list){
    p.innerText=`${list}`
    h1.innerText=`${list}`
    network.getblog().then(data => {
        console.log("asndfks");
        card.innerHTML = ``
        
            data.forEach(elem => {
                console.log(elem.list, list);
                if(elem.list == list){
                    card.innerHTML += `
                    <div class="box">
                    <div class="image">
                        <img src=${elem.image} alt="">
                    </div>
                    <div class="text">
                        <h2><a onclick='blogDetailFunc(${elem.id}'>${elem.blog_name}</a></h2>
                        <div class="status">
                            <div class="date">
                                <i class="bi bi-calendar3"></i>
                                ${elem.date}
                            </div>
                            <div class="list">
                                <i class="bi bi-folder"></i>
                                ${elem.list}
                            </div>
                            <div class="people">
                                <i class="bi bi-person-fill"></i>
                                ${elem.people}
                            </div>
                        </div>
                        <div class="desciption">
                        ${elem.description}
                        </div>
                    </div>
                    <a href="./blog_detail.html?id=${elem.id}">Read More</a>
                </div>
                `
                }
            })
        })
}
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

