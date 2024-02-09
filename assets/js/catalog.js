network.getfetch().then(data => {
    // console.log(data);
    info = [...data]
    infodata = info.sort((a, b) => a.vote_average - b.vote_average)
    // console.log(infodata);
})

const menuBtn = document.querySelector(".bi-list")
const adminNav = document.querySelector("#admin-nav")

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

const tbody = document.querySelector("tbody")
const sort = document.querySelector(".sort")
const search = document.querySelector(".search input")
const sortP = document.querySelector(".sort p")
function item() {
    network.getfetch().then(data => {
        [...info] = data
        tbody.innerHTML = ``
        info.forEach(element => {
            tbody.innerHTML += `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.original_title}</td>
                            <td><i class="bi bi-star-fill"></i>${element.vote_average.toFixed(1)}</td>
                            <td>${element.genres[0].name}</td>
                            <td>${element.runtime} min</td>
                            <td>
                                <i class="bi bi-pencil-square" ></i>
                                <i class="bi bi-eye-fill"></i>
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
    window.location.reload()
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
            tbody.innerHTML += `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.original_title}</td>
                            <td><i class="bi bi-star-fill"></i>${element.vote_average.toFixed(1)}</td>
                            <td>${element.genres[0].name}</td>
                            <td>${element.runtime} min</td>
                            <td>
                                <i class="bi bi-pencil-square"></i>
                                <i class="bi bi-eye-fill"></i>
                                <i class="bi bi-trash3"></i>
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
                tbody.innerHTML += `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.original_title}</td>
                            <td><i class="bi bi-star-fill"></i>${element.vote_average.toFixed(1)}</td>
                            <td>${element.genres[0].name}</td>
                            <td>${element.runtime} min</td>
                            <td>
                                <i class="bi bi-pencil-square"></i>
                                <i class="bi bi-eye-fill"></i>
                                <i class="bi bi-trash3"></i>
                            </td>
                        </tr>
                `
            }
        })
    })
})