const id =new URLSearchParams(window.location.search).get("id")
const card=document.querySelector(".blog-detail .card")
const firstBox=document.querySelector(".blog-detail .latest-box")
// const a = document.querySelector(".news-banner a")
const category= document.querySelector(".news-banner .category")
const name=document.querySelector(".news-banner p")
let count=0;
firstBox.innerHTML=``

network.getblogById(id).then(elem => {
    category.href=`./news.html?list=${elem.list}`
    // console.log(a);
    console.log(elem);
    category.innerText=`${elem.list}`
    name.innerText=`${elem.blog_name}`
    card.innerHTML=`
    <div class="box">
    <div class="image">
        <img src=${elem.image} alt="">
    </div>
    <div class="text">
        <h2>${elem.blog_name}</h2>
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
</div>
    `
    network.getblog().then(data => {
        data.forEach(elem => {
            if(count<3){
                if(elem.id != id){
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
            }
            
        })
    })
})

function blogDetailFunc(id){
    window.location=`./blog_detail.html?id=${id}`
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

