const action = document.querySelector(".playing")
network.getfetch().then((data) => {
    let arr=['Action'];
    data.forEach(elem => {
        elem.genres.forEach(e => {
            if(arr.length <=1 && e.name!='Action'){
                arr.push(e.name)
            }
            if(e.name=='Action'){
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
                arr=['Action']
            }
        })
    })
})