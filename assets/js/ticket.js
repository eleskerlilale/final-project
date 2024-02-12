const main = document.querySelector(".main")
const button = document.querySelector(".button")
const close = document.querySelectorAll(".close")
const request = document.querySelector(".request")
const buy = document.querySelector(".buy")
const backk = document.querySelector(".backk")
const image = document.querySelector(".image")
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
let countPrice = 0
let table = ''
button.addEventListener("click", () => {
    if (document.querySelector(".active")) {

        image.style.display = "flex"
        console.log(say);
        console.log(date, time);
        network.getfetchById(SearchId).then(data => {
            network.getfetchticket().then(ticket => {
                table = `${data.date[Number(say) - 1].seat}`
                ticket.forEach((t, index) => {
                    if (data.date[Number(say) - 1].seat.includes(t.seat)) {
                        seats[index].style.backgroundColor = 'red'
                    }
                })

                place.style.display = "block"
                image.style.display = "none"

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
                    if (index == 0) {
                        seatStr = seatStr.slice(newClassSeat.length + 3)
                        console.log(seatStr);
                    } else {
                        seatStr = seatStr.slice(0, index) + seatStr.slice(index + newClassSeat.length + 3)
                        console.log(seatStr);
                    }
                    selected.innerText = `${seatStr}`
                    price.innerText = `$${prc}`
                } else {
                    seat.style.backgroundColor = 'rgb(0, 128, 0)'
                    seatStr += `${seat.classList.value.slice(5)} | `
                    prc += Number(ticket[i].price)
                    selected.innerText = `${seatStr}`
                    price.innerText = `$${prc}`
                }
            }
        })
    })
})

proceed.addEventListener("click", () => {
    request.style.display = 'flex'
    buy.addEventListener("click", () => {
        network.getfetchById(SearchId).then(data => {
            network.getfetchaccount().then(dataaccount => {
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
                                seat: element.seat
                            }
                            network.getaccountpath(dataaccount[0].id, { date: favdata })
                        }
                    })
                } else {
                    favdata.push({
                        movieId: Number(SearchId),
                        date: date,
                        time: time,
                        seat: seatStr
                    })
                    console.log(favdata);
                    network.getaccountpath(dataaccount[0].id, { date: favdata })
                }
                network.getmainPath(SearchId, { date: maindata })
                network.getfetchaccount().then(data => {
                    console.log(data[0].id);
                    network.getmainaccountpath(data[0].id, { date: favdata })
                    window.location = './index.html'
                })
            })
        })
    })
    backk.addEventListener("click", () => {
        request.style.display = 'none'
    })
})