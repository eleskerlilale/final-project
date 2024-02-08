const card = document.querySelector(".blog .card")
const firstBox = document.querySelector(".latest-box")
const secondBox = document.querySelector(".category-box")
card.innerHTML = ``
firstBox.innerHTML = ``
secondBox.innerHTML = ``
let count = 0
network.getblog().then(data => {
    data.forEach(elem => {
        card.innerHTML += `
        <div class="box">
        <div class="image">
            <img src=${elem.image} alt="">
        </div>
        <div class="text">
            <h2><a href="./blog-detail.html">${elem.blog_name}</a></h2>
            <div class="status">
                <div class="date">
                    <i class="bi bi-calendar3"></i>
                    ${elem.date}
                </div>
                <div class="list">
                    <i class="bi bi-folder"></i>
                    ${elem.list}
                </div>
                <div class="people">
                    <i class="bi bi-person-fill"></i>
                    ${elem.people}
                </div>
            </div>
            <div class="desciption">
            ${elem.description}
            </div>
        </div>
        <a href="./blog_detail.html?id=${elem.id}">Read More</a>
    </div>

        `
        if (count < 3) {
            count++
            firstBox.innerHTML += `
        <div class="block" onclick='blogDetailFunc(${elem.id})'>
            <div class="image">
                <img src=${elem.image} alt="">
            </div>
            <div>
                <div class="people">
                    <i class="bi bi-person-fill"></i>
                    ${elem.people}
                </div>
                <h4>${elem.blog_name}</h4>
            </div>
        </div>
        `
        }
    })
})

function blogDetailFunc(id){
    window.location=`./blog_detail.html?id='${id}'`
}