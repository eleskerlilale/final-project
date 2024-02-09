const menuBtn = document.querySelector(".bi-list")
const adminNav = document.querySelector("#admin-nav")
const img = document.querySelector("#image")
const label = document.querySelector("label")
const name = document.querySelector("#name")
const textarea = document.querySelector("textarea")
const time = document.querySelector("#time")
const input = document.querySelector("#add-image")
const id = new URLSearchParams(window.location.search).get("id")

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

if (id) {

}
console.log(img);
input.addEventListener("input", () => {
    i = input.files[0]
    console.log(i.name);
    if (i) {
        console.log(i);
        const reader = new FileReader()
        reader.readAsDataURL(i)
        console.log("reader");
        reader.addEventListener("load", () => {
            img.src = reader.result
            console.log(img.src);
        })
    }
})