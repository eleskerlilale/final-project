const email = document.querySelector(".email")
const password = document.querySelector(".password")
const login = document.querySelector(".log")
let arr
login.addEventListener("click", () => {
    network.getMainaccount().then(data => {
        const id = data.find(f =>{
            f.email == email.value && f.password == password.value && f.type == 'admin' 
            return arr= f
        })
        if (id) {
            console.log(arr);
            network.getadminpost(arr)
            window.location = './dashboard.html'
        } else {
            alert("You are not an admin")
        }
    })
})