network.getfetch().then(data => {
    // console.log(data);
    info = [...data]
    infodata = info.sort((a, b) => a.vote_average - b.vote_average)
    // console.log(infodata);
})

const menuBtn = document.querySelector(".bi-list")
const adminNav = document.querySelector("#admin-nav")


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
let vote;
const tbody = document.querySelector("tbody")
const sort = document.querySelector(".sort")
const search = document.querySelector(".search input")
const sortP = document.querySelector(".sort p")
function item() {
    network.getfetch().then(data => {
        [...info] = data
        tbody.innerHTML = ``
       
        info.forEach(element => {
            if(element.vote_average){
                vote=element.vote_average.toFixed(1)
            }else{
                vote=0
            }
            tbody.innerHTML += `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.original_title}</td>
                            <td><i class="bi bi-star-fill"></i>${vote}</td>
                            <td>${element.genres[0].name}</td>
                            <td>${element.runtime} min</td>
                            <td>
                                <i class="bi bi-pencil-square" onclick='editFunc(${element.id})'></i>
                                <i class="bi bi-eye-fill" onclick='detailFunc(${element.id})'></i>
                                <i class="bi bi-trash3" onclick='delFunc(${element.id})'></i>
                            </td>
                        </tr>
            `
        });
    })
}
item()
function delFunc(id){
    network.getFetchDelete(id)
    
}
function editFunc(id){
    window.location=`./add_item.html?id=${id}`
}
function detailFunc(id){
    window.location=`./admin_detail.html?id=${id}`
}
sort.addEventListener("click", () => {
    tbody.innerHTML = ``
    network.getfetch().then(data => {
        [...arr] = data
        console.log(sortP.innerText);
        if (sortP.innerText == `Default`) {
            infonew = arr.sort((a, b) => a.original_title.localeCompare(b.original_title))
            console.log(infonew);
            sortP.innerHTML = 'Film name<i class="bi bi-list-nested"></i>'
        } else if (sortP.innerText == 'Film name') {
            infonew = arr.sort((a, b) => b.runtime - a.runtime)
            console.log(infonew);
            sortP.innerHTML = 'Runtime<i class="bi bi-list-nested"></i>'
        } else if (sortP.innerText == 'Runtime') {
            infonew = arr.sort((a, b) => b.vote_average - a.vote_average)
            console.log(infonew);
            sortP.innerHTML = 'Rating<i class="bi bi-list-nested"></i>'
        } else {
            infonew = data
            sortP.innerHTML = 'Default<i class="bi bi-list-nested"></i>'
        }
        infonew.forEach(element => {
            if(element.vote_average){
                vote=element.vote_average.toFixed(1)
            }else{
                vote=0
            }
            tbody.innerHTML += `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.original_title}</td>
                            <td><i class="bi bi-star-fill"></i>${vote}</td>
                            <td>${element.genres[0].name}</td>
                            <td>${element.runtime} min</td>
                            <td>
                                <i class="bi bi-pencil-square" onclick='editFunc(${element.id})'></i>
                                <i class="bi bi-eye-fill" onclick='detailFunc(${element.id})'></i>
                                <i class="bi bi-trash3" onclick='delFunc(${element.id})'></i>
                            </td>
                        </tr>
            `
        });
    })
})

search.addEventListener("input", () => {
    tbody.innerHTML = ``
    network.getfetch().then(data => {
        data.forEach(element => {
            if (element.original_title.toLowerCase().includes(search.value.toLowerCase())) {
                if(element.vote_average){
                    vote=element.vote_average.toFixed(1)
                }else{
                    vote=0
                }
                tbody.innerHTML += `
                            <tr>
                                <td>${element.id}</td>
                                <td>${element.original_title}</td>
                                <td><i class="bi bi-star-fill"></i>${vote}</td>
                                <td>${element.genres[0].name}</td>
                                <td>${element.runtime} min</td>
                                <td>
                                    <i class="bi bi-pencil-square" onclick='editFunc(${element.id})'></i>
                                    <i class="bi bi-eye-fill" onclick='detailFunc(${element.id})'></i>
                                    <i class="bi bi-trash3" onclick='delFunc(${element.id})'></i>
                                </td>
                            </tr>
                `
            }
        })
    })
})

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
