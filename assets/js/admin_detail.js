const menuBtn = document.querySelector(".bi-list")
const adminNav = document.querySelector("#admin-nav")
const img = document.querySelector("#image")
const label = document.querySelector("label")
const name = document.querySelector("#name")
const textarea = document.querySelector("textarea")
const time = document.querySelector("#time")
const input = document.querySelector("#add-image")
const id = new URLSearchParams(window.location.search).get("id")
const select = document.querySelector("select")
const checkbox = document.querySelectorAll("input[type=checkbox]")
const save = document.querySelector(".save")
const check = document.querySelector(".check")
const iframe = document.querySelector("iframe")
menuBtn.addEventListener("click", () => {
    console.log(menuBtn.classList.value);
    if (menuBtn.classList.value == 'bi bi-list') {
        console.log("sdb");
        adminNav.style.left = '0'
        menuBtn.classList.toggle("active")
    } else {
        adminNav.style.left = '-250px'
        menuBtn.classList.toggle("active")
    }
})

if (id) {
    network.getfetchById(id).then(data => {
        name.value = data.original_title
        textarea.value = data.overview
        time.value = data.runtime
        img.src = `https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`
        checkbox.forEach(e => {
           const g = data.genres.find(f => f.id== e.value)
           if(g){
            console.log(e);
            console.log(e.checked);
            e.checked=true
           }
        })
    })
}