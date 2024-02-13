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


let arr = [];
let dataFav = []
network.getfetch().then((data) => {
  network.getfetchaccount().then(datafav => {
    arr = data;
    dataFav = datafav
    console.log(data);
    printBanner();
    printData();
    $(document).ready(function () {
      $(".banner").owlCarousel({
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
      $(".trailer").owlCarousel({
        margin: 10,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          450: {
            items: 2,
          }
        },
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 3000,
      });
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
})

let carouselContainer = document.querySelector('.owl-carousel')
const playing = document.querySelector(".playing")
const positionTrailer=document.querySelector(".trailer")
const banner=document.querySelector(".banner")
playing.innerHTML = ''
positionTrailer.innerHTML=``
banner.innerHTML=``
let count=0
const printBanner = () => {
  arr.forEach(elem => {
    if(count<3){
      count++
      banner.innerHTML+=`
      <div class="my-card ">
      <div class="image">
          <img src=${elem.video_poster} alt="">
      </div>
      <div class="container">

          <div class="text-left">
              <div>
                  <p>in theater</p>
                  <span>March 2024</span>
                  <img src="https://demo.ovatheme.com/aovis/wp-content/plugins/movie-booking/assets/img/underline-heading-entire.png"
                      alt="">
              </div>
          </div>
          <div class="text-right">
              <span>Thriller Movie</span>
              <h1>${elem.original_title}</h1>
              <p>Writen and Directed by Aleesha Rose / Ireland 2023</p>
              <div>
                  <a href="./detail.html?id=${elem.id}" class="info">More Info</a>
                  <a href="./ticket.html?id=${elem.id}" class="ticket">Get Ticket</a>
              </div>
          </div>
      </div>
  </div>
      `
      positionTrailer.innerHTML+=`
      <div class="img">
        <img src=${elem.video_poster} alt="">
        <span onclick='videoFunc(${elem.id})'><i class="bi bi-caret-right-fill"></i></span>
    </div>
      `
    }
   
  })
}
const printData = () => {
  arr.forEach(elem => {
    // const ids = dataFav[dataFav.length - 1].favorite.find(f => f.id == elem.id)
    // if (!ids) {
      playing.innerHTML += `
                      <div class="my-card " >
                          <div>
                              <div class="image">
                                  <img src="${elem.poster_path}" alt="">
                              </div>
                              <div class="text">
                                  <div class="category-time">
                                      <p class="category">${elem.genres[0].name}</p>
                                      /
                                      <p class="time">${elem.runtime} min</p>
                                  </div>
                                  <div class="film-name" onclick="detailFunc(${elem.id})">${elem.original_title}</div>
                                  <a href="./ticket.html?id=${elem.id}">Ticket</a>
                              </div>
                              
                          </div>
                      </div>
      `
    // }
    // else {
    //   playing.innerHTML += `
    //                   <div class="my-card" >
    //                       <div>
    //                           <div class="image">
    //                               <img src="${elem.poster_path}" alt="">
    //                           </div>
    //                           <div class="text">
    //                               <div class="category-time">
    //                                   <p class="category">${elem.genres[0].name}</p>
    //                                   /
    //                                   <p class="time">${elem.runtime} min</p>
    //                               </div>
    //                               <div class="film-name" onclick="detailFunc(${elem.id})">${elem.original_title}</div>
    //                               <a href="./ticket.html?id=${elem.id}" >Ticket</a>
    //                           </div>
    //                           <div class='favorite favorite${elem.id}' onclick='favFunc(${elem.id})'><i class="bi bi-heart-fill"></i></div>
    //                       </div>
    //                   </div>
    //   `
    // }
  })
}

function videoFunc(id){
  network.getfetchById(id).then(elem => {
    const video= document.createElement("div")
    video.classList.add("video")
    document.body.prepend(video)
    video.innerHTML=`
    <i class="bi bi-x-lg"></i>
    <iframe  src="${elem.key}"></iframe>
    `
    const videoClose=document.querySelector(".video i")
    videoClose.addEventListener("click", () => {
        video.remove()
    })
  })
    
  
}

function detailFunc(id) {
  window.location = `./detail.html?id=${id}`
}

let index = ''
// function favFunc(id) {
//   const favorite = document.querySelector(`.favorite${id}`)
//   console.log("aside");
//   network.getfetchById(id).then(data => {
//     network.getfetchaccount().then(datafav => {
//       const ids = datafav[datafav.length - 1].favorite.find(f => f.id == data.id)
//       if (!ids) {
//         favorite.innerHTML = `<i class="bi bi-heart-fill"></i>`
//         console.log("aside");
//         datafav[datafav.length - 1].favorite.push(data)
//         network.getaccountpath(datafav[datafav.length - 1].id, { favorite: datafav[datafav.length - 1].favorite })
//         network.getfetchaccount().then(data => {
//           network.getMainaccount().then(maindata => {
//             maindata.forEach(maindt => {
//               if (maindt.email == data[0].email) {
//                 const index = maindt.id;
//                 network.getmainaccountpath(index, data[0])
//               }
//             })
//           })
//         })
//       }
//       else {
//         favorite.innerHTML = `<i class="bi bi-heart"></i>`
//         console.log(id);
//         [...newarr] = datafav[datafav.length - 1].favorite
//         newarr.forEach((elem, i) => {
//           if (elem.id == id) {
//             index = i
//           }
//         })
//         if (index > -1) {
//           newarr.splice(index, 1);
//         }
//         network.getaccountpath(datafav[datafav.length - 1].id, { favorite: newarr })
//         network.getfetchaccount().then(data => {
//           network.getMainaccount().then(maindata => {
//             maindata.forEach(maindt => {
//               if (maindt.email == data[0].email) {
//                 const index = maindt.id;
//                 network.getmainaccountpath(index,{ favorite: newarr } )
//               }
//             })
//           })
//         })
//       }
//     })
//   })
// }



