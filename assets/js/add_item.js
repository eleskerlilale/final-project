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
// const videos = document.querySelector("#add-images")
const e = document.querySelector(".e")
const file = document.querySelector("input[type=file]")
const f = document.querySelector(".f")
const fInput = document.querySelectorAll(".f input")
const inputP = document.querySelectorAll(".f label p")
const videolink=document.querySelector("#video-sec")
console.log(inputP);

window.addEventListener("load", () => {
    network.getadmin().then(data => {
        if (data.length == 0) {
            window.location = './admin-login.html'
        }
    })
})

const timeInput = document.querySelectorAll("#timeInput");
timeInput.forEach(timeInput => {
    timeInput.addEventListener("input", function () {
        const value = this.value.replace(/[^0-9]/g, "");
        if (value.length > 2) {
            const first = value.slice(0, 2);
            const second = value.slice(2);
            this.value = value.slice(0, 2) + ":" + value.slice(2);
            if (first > 23 || second > 60) {
                timeInput.value = 0
            }
        }
    })
})

const dateInput = document.querySelectorAll("#dateInput");
dateInput.forEach(dateInput => {
    dateInput.addEventListener("input", function () {
        const value = this.value.replace(/[^0-9]/g, "");
        if (value.length > 2) {
            const first = value.slice(0, 2);
            const second = value.slice(2, 4);
            this.value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
            if (first > 31 || second > 12) {
                dateInput.value = 0
            }
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
let imageSrc=[]
fInput.forEach((inputF, index) => {
    inputF.addEventListener("input", () => {
        const i = inputF.files[0]
        console.log(i.name);
        inputP[index].innerText = `${i.name}`
        if(i){
            console.log(i);
            const read = new FileReader()
            read.readAsDataURL(i)
            read.addEventListener("load" ,() => {
                console.log(read.result);
                
                // imageSrc.push(`${read.result}`)
            })
            // console.log(imageSrc.length);
        }
    })
})
let num = 0;
if (id) {
    network.getfetchById(id).then(data => {
        name.value = data.original_title
        textarea.value = data.overview
        time.value = data.runtime
        img.src = `${data.poster_path}`
        // iframe.src = `${data.key}`
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
        videolink.value=data.key
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
                // iframe.src = `./assets/image/${i.name}`
            }
        })
    }
})
let genres = []
let image = []
let dateItem = []
let limit = 0;
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
        if (limit < 3) {
            image.push(`./assets/image/${p.innerText}`)
            limit++
        }
    })
    dateItem = [
        {
            id: 1,
            date: dateInput[0].value,
            time: timeInput[0].value,
            seat: ""
        }
        , {
            id: 2,
            date: dateInput[1].value,
            time: timeInput[1].value,
            seat: ""
        }
    ]

    console.log(genres.length);
    console.log( name.value);
    console.log(textarea.value);
    console.log(img.src);
    console.log(time.value);
    // console.log(iframe.src);
    console.log(time.value == 0);
    console.log(inputP[3].innerText==0);
    if (genres.length != 0 || name.value != 0 || textarea.value != 0 || img.src == '' || time.value != 0 || dateInput[0].value!=0 || dateInput[1].value!=0 || timeInput[0].value!=0 || timeInput[1].value!=0  || inputP[0].innerText!=0 || inputP[1].innerText!=0 || inputP[2].innerText!=0 || inputP[3].innerText!=0) {
        if (!id) {
            network.getmainpost({
                original_title: name.value,
                overview: textarea.value,
                poster_path: img.src,
                runtime: Number(time.value),
                genres: genres,
                key:  videolink.value,
                image: image,
                date: dateItem,
                video_poster: `./assets/image/${inputP[3].innerText}`
            })
            check.style.display = 'flex'
            setTimeout(() => {
                check.style.display = 'none'
                // window.location = './catalog.html'
            }, 1000);

        } else {
            network.getmainPath(id, {
                original_title: name.value,
                overview: textarea.value,
                poster_path: img.src,
                runtime: Number(time.value),
                genres: genres,
                key:  videolink.value,
                date: dateItem,
                image: image,
                video_poster: `./assets/image/${inputP[3].innerText}`
            })
            check.style.display = 'flex'
            setTimeout(() => {
                check.style.display = 'none'
                window.location = './catalog.html'
            }, 1000);
        }
    }
    else {
        alert("Fill in the boxes")
    }
})




