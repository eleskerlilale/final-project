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

const seat = document.querySelectorAll(".seat")

const place = document.querySelector(".place")

seat.forEach((seat , i) => {
        const div=document.createElement("div")
        seat.appendChild(div)
        network.getfetchticket().then(data => {
            data.forEach(data => {
                console.log(seat.classList.value, data.seat);
                if(seat.classList.value==`seat ${data.seat}`){
                    console.log("sdbf");
                    div.innerHTML=`
                    <span>${data.seat}</span>
                    <span class='degree'>${data.degree}</span>
                    <span>${data.price}</span>
                    `
                }
            })
            
        })
        
    })