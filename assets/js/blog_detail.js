const id =new URLSearchParams(window.location.search).get("id")
console.log(id);

const card=document.querySelector(".blog-detail .card")
const firstBox=document.querySelector(".blog-detail .latest-box")

network.getblogById(id).then(elem => {
    console.log(elem);
    card.innerHTML=`
    <div class="box">
    <div class="image">
        <img src=${elem.image} alt="">
    </div>
    <div class="text">
        <h2>${elem.blog_name}</h2>
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
</div>
    `
})
