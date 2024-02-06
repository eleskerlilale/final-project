const main=document.querySelector(".main")
// const id=new URLSearchParams(window.location.search).get("id")
console.log("adf");
network.getfetchById(572802).then(data => {
    data.date.forEach(elem => {
        main.innerHTML+=`
        <div class="box" onclick='chooseFunc(${elem.id})'>
        <div>
            Date:
            <div class="date">
                ${elem.date}
            </div>
        </div>
        <div>
            Time:<div class="time">${elem.time}</div>
        </div>
    </div>
        `
    })
})

function chooseFunc(id){
    
}

const place = document.querySelector(".place")
place.addEventListener("mousemove", () => {

    place.addEventListener("mouseout", () => {


    })
})