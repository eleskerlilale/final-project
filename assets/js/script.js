const nav=document.querySelector("nav")
const menuList=document.querySelector(".menu-list")
const resMenuList=document.querySelector(".res-menu-list")
const resMenuListPElem=document.querySelector(".res-menu-list p")
const menuButton=document.querySelector(".menu")
const playing = document.querySelector(".playing")

menuButton.addEventListener("click", () => {
    menuList.style.zIndex='110'
    resMenuList.style.left='0'
})
resMenuListPElem.addEventListener("click" , () => {
  menuList.style.zIndex='-10'
  resMenuList.style.left='-300px'
})

window.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop>200 || document.body.scrollTop>200){
    nav.style.backgroundColor="black"
  }else{
    nav.style.backgroundColor="transparent"
  }
})
playing.innerHTML = ''
let arr = [];

network.getfetch().then((data) => {
    arr = data;
    console.log(data);
    printData();
    $(document).ready(function () {
      $(".playing").owlCarousel({
        margin: 10,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
          1400: {
            items: 4,
          }
        },
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 3000,
      });
      $(".photos").owlCarousel({
        margin: 10,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        }
      });
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
      $(".people").owlCarousel({
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
  });

let carouselContainer = document.querySelector('.owl-carousel')

const printData = () => {
  arr.forEach(elem => {
    console.log(elem.genres[0]);
    playing.innerHTML += `
                      <div class="my-card" onclick="detailFunc(${elem.id})">
                          <div>
                              <div class="image">
                                  <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${elem.poster_path}" alt="">
                              </div>
                              <div class="text">
                                  <div class="category-time">
                                      <p class="category">${elem.genres[0].name}</p>
                                      /
                                      <p class="time">${elem.runtime} min</p>
                                  </div>
                                  <div class="film-name">${elem.original_title}</div>
                                  <a href="ticket">Ticket</a>
                              </div>
                          </div>
                      </div>
      `
  })
}
function detailFunc(id){
  window.location=`./detail.html?id=${id}`
}