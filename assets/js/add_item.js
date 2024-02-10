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
console.log(img);
input.addEventListener("input", () => {
    // src=`C:/Users/user/Videos`+'/'+`${i.name}`;

    i = input.files[0]
    console.log(i);
    console.log(i.href);
    if (i) {
        // iframe.src=`C:/Users/user/Videos/${i.name}`
        console.log(i);
        const reader = new FileReader()
        reader.readAsDataURL(i)
        console.log("reader");
        reader.addEventListener("load", () => {
            img.src = reader.result
            // iframe.src=reader.result
            console.log(img.src);
        })
    }

})
let genres = []

save.addEventListener("click", () => {
    checkbox.forEach(e => {
        if (e.checked) {
            genres.push({
                "id": Number(e.value),
                "name": e.id
            })
        }
    })
    if (genres.length != 0) {
        if (!id) {
            network.getmainpost({
                original_title: name.value,
                overview: textarea.value,
                poster_path: img.src,
                runtime: Number(time.value),
                genres: genres
            })
            check.style.display = 'flex'

            setTimeout(() => {
                check.style.display = 'none'
            }, 1000);

        }else{
            network.getmainPath(id , {
                original_title: name.value,
                overview: textarea.value,
                poster_path: img.src,
                runtime: Number(time.value),
                genres: genres
            })
            window.location='./catalog.html'
        }
    }
    else{
        alert("genres seç")
    }
})

