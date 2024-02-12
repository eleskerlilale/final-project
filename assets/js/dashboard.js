const tbodyone = document.querySelector(".first tbody")
const tbody2 = document.querySelector(".second tbody")
const tbody3=document.querySelector(".thrid tbody")
const reload=document.querySelectorAll(".bi-arrow-clockwise")
const menuBtn=document.querySelector(".bi-list")
const adminNav=document.querySelector("#admin-nav")
const sortArr = []
let count = 0

reload.forEach(reload => {
    reload.addEventListener("click", () => {
        window.location.reload()
    })
})

menuBtn.addEventListener("click", () => {
    console.log(menuBtn.classList.value);
    if(menuBtn.classList.value=='bi bi-list'){
        console.log("sdb");
        adminNav.style.left='0'
        menuBtn.classList.toggle("active")
    }else{
        adminNav.style.left='-250px'
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
    data.forEach((dt , i) => {
        if(i>data.length-6){
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

network.getMainaccount().then( data => {
    console.log(data);
    data.forEach(dt => {
        tbody3.innerHTML+=`
        <tr>
        <td>${dt.id}</td>
        <td>${dt.email}</td>
        <td>${dt.username}</td>
        <td>${dt.password}</td>
        <!-- <td>RATING</td> -->
    </tr>
        `
    })
})