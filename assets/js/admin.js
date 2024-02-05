const adminPanel = document.querySelector(".admin-panel")
const search=document.querySelector("#search-input")
adminPanel.style.color = 'red'

network.getfetch().then((data) => {
    data.forEach(elem => {
        adminPanel.innerHTML += `
                          <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
                                      <div class="film-name" onclick='detailFunc(${elem.id})'>${elem.original_title}</div>
                                      <a href='./detail.html?id=${elem.id}'>Detail</a>
                                  </div>
                                  <div class="edit-delete">
                                        <div class="delete" onclick='deleteFunc(${elem.id})'>
                                            <i class="bi bi-trash3"></i>
                                        </div>
                                        <div class="edit" >
                                            <a href="edit.html?id=${elem.id}"><i class="bi bi-pencil-fill"></i></a>
                                        </div>
                                    </div>
                              </div>
                          </div>
          `
    })
})

function detailFunc(id) {
    window.location = `./detail.html?id=${id}`
}

function deleteFunc(id){
    console.log(id);
    network.getFetchDelete(id).then(data => console.log(data))
    window.location.reload()
}

search.addEventListener("input", () => {
    adminPanel.innerHTML=``
    network.getfetch().then(data => {
        console.log(data);
        data.forEach(elem => {
            if(elem.original_title.toLowerCase().includes(search.value.toLowerCase())){
                adminPanel.innerHTML+=`
                <div class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
                                      <div class="film-name" onclick='detailFunc(${elem.id})'>${elem.original_title}</div>
                                      <a href='./detail.html?id=${elem.id}'>Detail</a>
                                  </div>
                                  <div class="edit-delete">
                                        <div class="delete" onclick='deleteFunc(${elem.id})'>
                                            <i class="bi bi-trash3"></i>
                                        </div>
                                        <div class="edit" >
                                            <a href="edit.html?id=${elem.id}"><i class="bi bi-pencil-fill"></i></a>
                                        </div>
                                    </div>
                              </div>
                          </div>
                `
            }
        })
    })
})