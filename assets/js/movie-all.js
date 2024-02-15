const nav = document.querySelector("nav")
const menuList = document.querySelector(".menu-list")
const resMenuList = document.querySelector(".res-menu-list")
const resMenuListPElem = document.querySelector(".res-menu-list p")
const menuButton = document.querySelector(".menu")
const subNav = document.querySelectorAll(".sub-nav")
const movieSub = document.querySelectorAll(".movie-sub")
const subNavSecond = document.querySelector(".sub-nav-second")
const accountA = document.querySelector(".search a")
const accountback = document.querySelector(".search")

network.getfetchaccount().then(data => {
  accountA.innerHTML = `${data[0].username[0].toUpperCase()}`
  accountback.style.backgroundColor = '#' + `${data[0].color}`
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



const movie = document.querySelector(".playing")

network.getfetch().then(data => {
  network.getfetchaccount().then(dataFav => {
    if (dataFav.length != 0) {
      data.forEach(elem => {
        const ids = dataFav[dataFav.length - 1].favorite.find(f => f.id == elem.id)
        if (!ids) {
          movie.innerHTML += `
                        <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-12" >
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
                                <div class='favorite favorite${elem.id}' onclick='favFunc(${elem.id})'><i class="bi bi-heart"></i></div>
                            </div>
                        </div>
                      `
        }
        else {
          movie.innerHTML += `
                        <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-12" >
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
                                    <a href="ticket">Ticket</a>
                                </div>
                                <div class='favorite favorite${elem.id}' onclick='favFunc(${elem.id})'><i class="bi bi-heart-fill"></i></div>
                            </div>
                        </div>
        `
        }
      })
    } else {
      data.forEach(elem => {
        movie.innerHTML += `
        <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-12" >
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
                    <a href="ticket">Ticket</a>
                </div>
                <div class='favorite favorite${elem.id}' onclick='favFunc(${elem.id})'><i class="bi bi-heart"></i></div>
            </div>
        </div>
  `
      })
      
    }
  })
})

function detailFunc(id) {
  window.location = `./detail.html?id=${id}`
}
function favFunc(id) {
  const favorite = document.querySelector(`.favorite${id}`)
  network.getfetchById(id).then(data => {
    network.getfetchaccount().then(datafav => {
      if (datafav.length != 0) {
        const ids = datafav[datafav.length - 1].favorite.find(f => f.id == data.id)
        if (!ids) {
          favorite.innerHTML = `<i class="bi bi-heart-fill"></i>`
          datafav[datafav.length - 1].favorite.push(data)
          network.getaccountpath(datafav[datafav.length - 1].id, { favorite: datafav[datafav.length - 1].favorite })
          network.getfetchaccount().then(data => {
            network.getMainaccount().then(maindata => {
              maindata.forEach(maindt => {
                if (maindt.email == data[0].email) {
                  const index = maindt.id;
                  network.getmainaccountpath(index, data[0])
                }
              })
            })
          })
        }
        else {
          favorite.innerHTML = `<i class="bi bi-heart"></i>`
          console.log(id);
          [...newarr] = datafav[datafav.length - 1].favorite
          newarr.forEach((elem, i) => {
            if (elem.id == id) {
              index = i
            }
          })
          if (index > -1) {
            newarr.splice(index, 1);
          }
          network.getaccountpath(datafav[datafav.length - 1].id, { favorite: newarr })
          network.getfetchaccount().then(data => {
            network.getMainaccount().then(maindata => {
              maindata.forEach(maindt => {
                if (maindt.email == data[0].email) {
                  const index = maindt.id;
                  network.getmainaccountpath(index, { favorite: newarr })
                }
              })
            })
          })
        }
      }else{
        window.location='./account.html'
      }
    })

  })
}
// network.getfetchaccount().then(data => console.log(data))

const search = document.querySelector(".search input")

search.addEventListener("input", () => {
  movie.innerHTML = ``
  network.getfetch().then(data => {
    network.getfetchaccount().then(dataFav => {
      data.forEach(elem => {
        const ids = dataFav[dataFav.length - 1].favorite.find(f => f.id == elem.id)
        console.log(search.value);
        if (elem.original_title.toLowerCase().includes(search.value.toLowerCase())) {
          if (!ids) {
            movie.innerHTML += `
                            <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-12" >
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
                                        <div class="film-name" onclick="detailFunc(${elem.id})">${elem.original_title}</div>
                                        <a href="ticket">Ticket</a>
                                    </div>
                                    <div class='favorite favorite${elem.id}' onclick='favFunc(${elem.id})'><i class="bi bi-heart"></i></div>
                                </div>
                            </div>
                          `
          }
          else {
            movie.innerHTML += `
                            <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-12" >
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
                                        <div class="film-name" onclick="detailFunc(${elem.id})">${elem.original_title}</div>
                                        <a href="ticket">Ticket</a>
                                    </div>
                                    <div class='favorite favorite${elem.id}' onclick='favFunc(${elem.id})'><i class="bi bi-heart-fill"></i></div>
                                </div>
                            </div>
            `
          }
        }
      })
    })
  })
})