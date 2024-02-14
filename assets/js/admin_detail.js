const menuBtn = document.querySelector(".bi-list")
const adminNav = document.querySelector("#admin-nav")
const img = document.querySelector("#img")
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
const f = document.querySelector(".f")
// const video=document.querySelector(".e")
const fInput = document.querySelectorAll(".f input")
const inputP = document.querySelectorAll(".f label p")

window.addEventListener("load" , () => {
    network.getadmin().then(data => {
        if(data.length==0){
            window.location='./admin-login.html'
        }
    })
})
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
let count=0;
let num=0;
if (id) {
    network.getfetchById(id).then(data => {
        name.value = data.original_title
        textarea.value = data.overview
        time.value = data.runtime
        img.src = `${data.poster_path}`
        iframe.src = `${data.key}`
        checkbox.forEach(e => {
            const g = data.genres.find(f => f.id == e.value)
            if (g) {
                console.log(e);
                console.log(e.checked);
                e.checked = true
            }
        })
        while (num < 3) {
            inputP[num].innerText = `${data.image[num].slice(15)}`
            num++
            console.log(num);
        }
        inputP[3].innerText = `${data.video_poster.slice(15)}`
        data.date.forEach((d, i) => {
            dateInput[i].value = data.date[i].date
            timeInput[i].value = data.date[i].time
        })
    })
}