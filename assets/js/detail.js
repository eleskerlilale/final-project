const id = new URLSearchParams(window.location.search).get("id")
console.log(typeof id);
const filmDetail = document.querySelector(".film-detail")

const arr = []
network.getfetchById(Number(id)).then(data => {
    console.log(data.original_title);
    data.genres.forEach(e => arr.push(e.name))
    console.log(arr);
    filmDetail.innerHTML = `
                <div class="title">
                    <div>
                        <h2>${data.original_title}</h2>
                        <div><p>${arr} </p>/<p> ${data.runtime} mins</p></div>
                    </div>
                    <a href="./tiicket.html">Get Ticket</a>
                </div>
                <div class="trailer">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.key}?si=J50oRX8ZcO58lLW2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div class="description">
                    <h2>Story Line</h2>
                    <p>${data.overview}</p>
                </div>
    `
})