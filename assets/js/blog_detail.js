const id =new URLSearchParams(window.location.search).get("id")
const card=document.querySelector(".blog-detail .card")
const firstBox=document.querySelector(".blog-detail .latest-box")

const category= document.querySelector(".news-banner .category")
const name=document.querySelector(".news-banner p")
let count=0;
firstBox.innerHTML=``

network.getblogById(id).then(elem => {
    console.log(elem);
    category.innerText=`${elem.list}`
    name.innerText=`${elem.blog_name}`
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
    network.getblog().then(data => {
        data.forEach(elem => {
            if(count<3){
                if(elem.id != id){
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
            }
            
        })
    })
})

function blogDetailFunc(id){
    window.location=`./blog_detail.html?id=${id}`
}