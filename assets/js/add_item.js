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
const videos = document.querySelector("#add-images")
const e = document.querySelector(".e")
const file = document.querySelector("input[type=file]")
const f = document.querySelector(".f")
const fInput = document.querySelectorAll(".f input")
const inputP = document.querySelectorAll(".f label p")
console.log(inputP);

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
let count = 0;
fInput.forEach((inputF, index) => {
    inputF.addEventListener("input", () => {
        const i = inputF.files[0]
        console.log(i.name);
        inputP[index].innerText = `${i.name}`
    })
})
let num = 0;
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
        inputP[3].innerText=`${data.video_poster.slice(15)}`
    })
}

file.addEventListener("input", () => {
    i = input.files[0]
    console.log(i);
    console.log(i.name.length);
    console.log();
    if (i) {
        console.log(i);
        const reader = new FileReader()
        reader.readAsDataURL(i)
        reader.addEventListener("load", () => {
            if (i.name.slice(i.name.length - 3) != "mp4") {
                img.src = reader.result
            } else {
                iframe.src=`./assets/image/${i.name}`
            }
        })
    }
})
let genres = []
let image = []
let limit=0;
save.addEventListener("click", () => {
    checkbox.forEach(e => {
        if (e.checked) {
            genres.push({
                "id": Number(e.value),
                "name": e.id
            })
        }
    })
    inputP.forEach(p => {
        if(limit<3){
            image.push(`./assets/image/${p.innerText}`)
            limit++
        }
    })
    if (genres.length != 0) {
        if (!id) {
            network.getmainpost({
                original_title: name.value,
                overview: textarea.value,
                poster_path: img.src,
                runtime: Number(time.value),
                genres: genres,
                key: iframe.src,
                image: image,
                video_poster:`./assets/image/${inputP[3].innerText}`
            })
            check.style.display = 'flex'
            setTimeout(() => {
                check.style.display = 'none'
            }, 1000);
        } else {
            network.getmainPath(id, {
                original_title: name.value,
                overview: textarea.value,
                poster_path: img.src,
                runtime: Number(time.value),
                genres: genres,
                key: iframe.src,
                image: image,
                video_poster:`./assets/image/${inputP[3].innerText}`
            })
            window.location = './catalog.html'
        }
    }
    else {
        alert("Enter genres")
    }
})

