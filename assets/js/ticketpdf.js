const id = new URLSearchParams(window.location.search).get("id")
const date = new URLSearchParams(window.location.search).get("date")
const time = new URLSearchParams(window.location.search).get("time")

const ticName=document.querySelector(".ticket-name")
const ticSeat=document.querySelector(".ticket-seat")
const ticDate=document.querySelector(".ticket-date")
const ticTime=document.querySelector(".ticket-time")
const ticPrice=document.querySelector(".ticket-price")
// console.log(id, date);

network.getfetchaccount().then(data => {
    const ids = data[0].date.find(f => f.movieId == id && f.date==date && f.time==time )
    if(ids){
        console.log(ids);
        ticName.innerText=`${ids.movieName}`
        ticSeat.innerText=`${ids.seat}`
        ticDate.innerText=`${ids.date}`
        ticTime.innerText=`${ids.time}`
        ticPrice.innerText=`${ids.price}$`
    }
})
function generate() {
    console.log(window);
    console.log(invoice);
    html2pdf().from(invoice).save()
    console.log("dfgsdf");
}