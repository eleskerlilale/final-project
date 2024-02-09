const main = document.querySelector(".main")
const button=document.querySelector(".button")
// const id=new URLSearchParams(window.location.search).get("id")
// console.log(id);
network.getfetchById(787699).then(data => {
    data.date.forEach(elem => {
        main.innerHTML += `
        <div class="box box${elem.id}" onclick='chooseFunc(${elem.id})'>
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
let date='';
let time='';
function chooseFunc(id) {
    const boxs=document.querySelectorAll(".box")
    const box=document.querySelector(`.box${id}`)
    const dateElem=document.querySelector(`.box .date`)
    const timeElem=document.querySelector(`.box .time`)
    console.log(box);
    if(box.classList.value==`box box${id}`){
        boxs.forEach(b => b.classList.remove("active"));
        box.classList.add("active");
        date=dateElem.innerText;
        time=timeElem.innerText;
    }else{
        box.classList.remove("active")
    }
}
const seat = document.querySelectorAll(".seats .seat")
const place = document.querySelector(".place")
const selected = document.querySelector(".main-seat-price .seat")
const price = document.querySelector(".main-seat-price .price")
let countPrice=0

button.addEventListener("click", () => {
    console.log(date, time);
    seat.forEach((seat, i)=> {
        network.getfetchticket().then(data => {
            data.forEach(elem => {
                if(elem.table){
                    const ids= elem.table.find(f => (f.moviedate==date && f.movietime == time))
                    if(ids){
                        console.log(ids);
                    }
                    // elem.table.forEach(e => {
                    //     // console.log(e);
                    //     if((e.moviedate == date && e.movietime == time)){
                    //         console.log(e);
                    //         // if(e.oturacaq.includes(seat.classList.value.slice(5))){
                    //         //     console.log(seat);
                    //         //     seat.style.backgroundColor="red"
                    //         //     seat.classList.add("active")
                    //         // }
                    //     }
                    // })
                }
            })
        })
    })
})

let seatStr=''

seat.forEach((seat, i) => {
    const div = document.createElement("div")
    seat.appendChild(div)
    network.getfetchticket().then(data => {
        data.map(data => {
            if (seat.classList.value == `seat ${data.seat}`) {
                div.innerHTML = `
                    <span>${data.seat}</span>
                    <span class='degree'>${data.degree}</span>
                    <span>${data.price}$</span>
                    `
            }
        })
    })
    seat.addEventListener("click", () => {
        if(!seat.classList.value.includes("active")){
            network.getfetchticket().then(data => {
                data.map(f =>  {
                    if(seat.classList.value.includes(f.seat)){
                        if(seat.classList.value.includes('yasil')){
                            countPrice-=Number(f.price)
                            price.innerHTML=`$${countPrice}`
                            seat.style.backgroundColor="#fff"
                            seat.classList.remove("yasil")
                            const i = seatStr.indexOf(f.seat)
                            if(i!=0){
                                seatStr=seatStr.slice(0,i)+seatStr.slice((i+f.seat.length+2))
                            }
                            else{
                                seatStr=seatStr.slice((i+f.seat.length+2))
                            }
                            // console.log(seatStr.slice(i,i+f.seat.length), seatStr);
                            selected.innerHTML=`${seatStr}`
                        }else{
                            seatStr+=`${f.seat} | `
                            selected.innerHTML=`${seatStr}`

                            countPrice+=Number(f.price)
                            price.innerHTML=`$${countPrice}`
                            seat.style.backgroundColor="#99ff00"
                            seat.classList.add("yasil")
                        }
                    }
                })
            })
        }
    })
})
