const main = document.querySelector(".main")
const tckt = document.querySelector("#ticket .ticket")
const button = document.querySelector(".button")
const close = document.querySelectorAll(".close")
const request = document.querySelector(".request")
const buy = document.querySelector(".buy")
const backk = document.querySelector(".backk")
const image = document.querySelector(".image")
const down = document.querySelector(".down")
const SearchId = new URLSearchParams(window.location.search).get("id")
console.log(typeof SearchId);
network.getfetchticket().then(data => console.log(data))
network.getfetchById(SearchId).then(data => {
    data.date.forEach(elem => {
        main.innerHTML += `
        <div class="box box${elem.id}" onclick='chooseFunc(${elem.id})'>
            <div>
                Date:
                <div class="date date${elem.id}">
                    ${elem.date}
                </div>
            </div>
            <div>
                Time:<div class="time time${elem.id}">${elem.time}</div>
            </div>
        </div>
        `
    })
})
let date = '';
let time = '';
let say = ''
function chooseFunc(id) {
    say = id
    const boxs = document.querySelectorAll(".box")
    const box = document.querySelector(`.box${id}`)
    const dateElem = document.querySelector(`.box .date${id} `)
    const timeElem = document.querySelector(`.box .time${id}`)
    console.log(box);
    if (box.classList.value == `box box${id}`) {
        boxs.forEach(b => b.classList.remove("active"));
        box.classList.add("active");
        date = dateElem.innerText;
        time = timeElem.innerText;
        console.log(date);
    } else {
        box.classList.remove("active")
    }
}
const seats = document.querySelectorAll(".seats .seat")
const place = document.querySelector("#place")
const selected = document.querySelector(".main-seat-price .seat")
const price = document.querySelector(".main-seat-price .price")
const proceed = document.querySelector(".proceed")
const totalPrice = document.querySelector(".total-price")

// let countPrice = 0

let table = ''
let totalprc = 0;
let ticName = ''
button.addEventListener("click", () => {
    if (document.querySelector(".active")) {
        image.style.display = "flex"
        console.log(say);
        console.log(date, time);
        network.getfetchById(SearchId).then(data => {
            network.getfetchticket().then(ticket => {
                table = `${data.date[Number(say) - 1].seat}`
                ticName = data.original_title
                ticket.forEach((t, index) => {
                    if (data.date[Number(say) - 1].seat.includes(t.seat)) {
                        seats[index].style.backgroundColor = 'red'
                    }
                })
                place.style.display = "block"
                image.style.display = "none"
            })
            network.getfetchaccount().then(dt => {
                dt[0].date.forEach((dt, i) => {
                    if (dt.movieId == SearchId && dt.date == date && dt.time == time) {
                        totalPrice.innerText = `$${dt.price}`
                        totalprc = dt.price
                    }
                })
            })
        })
    } else {
        alert("Choose one of the options")
    }
})

close.forEach((close, i) => {
    close.addEventListener("click", () => {
        if (i == 0) {
            window.location = './index.html'
        } else {
            place.style.display = 'none'
        }
    })
})

let seatStr = '';
let newClassSeat = '';

let prc = 0;
seats.forEach((seat, i) => {
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
        network.getfetchticket().then(ticket => {
            if (getComputedStyle(seat).backgroundColor != 'rgb(255, 0, 0)') {
                if (getComputedStyle(seat).backgroundColor == 'rgb(0, 128, 0)') {
                    seat.style.backgroundColor = 'rgb(255, 255, 255)'
                    newClassSeat = seat.classList.value.slice(5)
                    const index = seatStr.indexOf(newClassSeat)
                    prc -= Number(ticket[i].price)
                    totalprc -= Number(ticket[i].price)
                    if (index == 0) {
                        seatStr = seatStr.slice(newClassSeat.length + 3)
                        console.log(seatStr);
                    } else {
                        seatStr = seatStr.slice(0, index) + seatStr.slice(index + newClassSeat.length + 3)
                        console.log(seatStr);
                    }
                    selected.innerText = `${seatStr}`
                    totalPrice.innerText = `$${totalprc}`
                    price.innerText = `$${prc}`

                } else {
                    seat.style.backgroundColor = 'rgb(0, 128, 0)'
                    seatStr += `${seat.classList.value.slice(5)} | `
                    prc += Number(ticket[i].price)
                    totalprc += Number(ticket[i].price)
                    selected.innerText = `${seatStr}`
                    price.innerText = `$${prc}`
                    totalPrice.innerText = `$${totalprc}`
                }
            }
        })
    })
})
const invoice = document.querySelector("#invoice")
const ticketname = document.querySelector(".invoice .ticket-name")
const ticketdate = document.querySelector(".invoice .ticket-date")
const tickettime = document.querySelector(".invoice .ticket-time")
const ticketseat = document.querySelector(".invoice .ticket-seat")
const ticketprice = document.querySelector(".invoice .ticket-price")


proceed.addEventListener("click", () => {
    if (seatStr != '') {
        request.style.display = 'flex'
        buy.addEventListener("click", () => {
            network.getfetchById(SearchId).then(data => {
                network.getfetchaccount().then(dataaccount => {
                    ticketname.innerText = data.original_title;
                    [...favdata] = dataaccount[0].date;
                    [...maindata] = data.date;
                    console.log(seatStr);
                    data.date.forEach((element, x) => {
                        if (element.date == date && element.time == time) {
                            maindata[x].seat = table + seatStr;
                            console.log(maindata);
                        }
                    })
                    const yoxla = favdata.find(f => (f.movieId === Number(SearchId) && f.date === date && f.time === time))
                    if (yoxla) {
                        favdata.forEach((element, y) => {
                            if (element.movieId == Number(SearchId) && element.date == date) {
                                element.seat += seatStr
                                console.log(favdata);
                                favdata[y] = {
                                    movieId: Number(SearchId),
                                    date: element.date,
                                    time: element.time,
                                    seat: element.seat,
                                    price: totalprc
                                }
                                
                                ticketdate.innerText = date
                                tickettime.innerText = time
                                ticketseat.innerText = element.seat
                                ticketprice.innerText = `$${totalprc}`
                                network.getaccountpath(dataaccount[0].id, { date: favdata })
                            }
                        })
                    } else {
                        favdata.push({
                            movieId: Number(SearchId),
                            date: date,
                            time: time,
                            seat: seatStr,
                            price: totalprc
                        })
                        // ticketname.innerText = ticName
                        ticketdate.innerText = date
                        tickettime.innerText = time
                        ticketseat.innerText = seatStr
                        ticketprice.innerText = `$${totalprc}`
                        console.log(favdata);
                        network.getaccountpath(dataaccount[0].id, { date: favdata })
                    }

                    network.getmainPath(SearchId, { date: maindata })
                    network.getfetchaccount().then(data => {
                        console.log(data[0].id);
                        network.getmainaccountpath(data[0].id, { date: favdata })
                        // window.location = './index.html'

                    })
                })
            })

            place.style.display = 'none'
            tckt.style.display = 'none'
            request.style.display = 'none'
            invoice.style.display = 'flex'
            down.style.display = 'block'
        })
        backk.addEventListener("click", () => {
            request.style.display = 'none'
        })
    } else {
        alert("You didn't choose")
    }

})



function generate() {
    console.log("sdfgsd");

    console.log(window);
    console.log(invoice);
    html2pdf().from(invoice).save()
    console.log("dfgsdf");
}