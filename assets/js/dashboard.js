const tbodyone = document.querySelector(".first tbody")
const tbody2 = document.querySelector(".second tbody")
const tbody3 = document.querySelector(".thrid tbody")
const reload = document.querySelectorAll(".bi-arrow-clockwise")
const menuBtn = document.querySelector(".bi-list")
const adminNav = document.querySelector("#admin-nav")
const adminlogout = document.querySelector(".admin-log-out")

console.log(adminlogout);
window.addEventListener("load" , () => {
    network.getadmin().then(data => {
        if(data.length==0){
            window.location='./admin-login.html'
        }
    })
})

adminlogout.addEventListener("click", () => {
    network.getadmin().then(data => {
        network.getadmindelete(data[0].id)
        // window.location.reload()
    })
})

const sortArr = []
let count = 0
window.addEventListener("resize", () => {
    // console.log("dfsd");
    if (document.body.scrollWidth < 768) {
        adminNav.style.left = '-250px'
        menuBtn.classList.remove("active")

    } else {
        adminNav.style.left = '0'
        menuBtn.classList.add("active")

    }
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

network.getfetch().then(data => {
    data.forEach(elem => {
        sortArr.push(elem.vote_average)
    })
    sortArr.sort(localeCompare).slice(0, 5).forEach((e, i) => {
        data.forEach(dt => {
            if (e == dt.vote_average && count < 5) {
                console.log(e);
                count++
                tbodyone.innerHTML += `
                <tr>
                    <td>${dt.id}</td>
                    <td>${dt.original_title}</td>
                    <td>${dt.runtime} min</td>
                    <td><i class="bi bi-star-fill"></i>${dt.vote_average.toFixed(1)}</td>
                </tr>
                `
            }
        })
    })
})

function localeCompare(a, b) {
    return b - a;
}

network.getfetch().then(data => {
    data.forEach((dt, i) => {
        if (i > data.length - 6) {
            tbody2.innerHTML += `
                <tr>
                    <td>${dt.id}</td>
                    <td>${dt.original_title}</td>
                    <td>${dt.runtime} min</td>
                    <td><i class="bi bi-star-fill"></i>${dt.vote_average.toFixed(1)}</td>
                </tr>
                `
        }
    })
})

network.getMainaccount().then(data => {
    console.log(data);
    data.forEach((dt, i) => {
        if (i != 0) {
            if (i > data.length - 6) {
                tbody3.innerHTML += `
                        <tr>
                        <td>${dt.id}</td>
                        <td>${dt.email}</td>
                        <td>${dt.username}</td>
                        <!-- <td>RATING</td> -->
                    </tr>
                        `
            }
        }
    })
})