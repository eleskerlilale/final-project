const email = document.querySelector(".email")
const password = document.querySelector(".password")
const login = document.querySelector(".log")
const icon = document.querySelector(".bi-eye")
let arr
login.addEventListener("click", () => {
    network.getMainaccount().then(data => {
        const id = data.find(f =>f.email == email.value && f.type == 'admin')
        if (id) {
            if(id.password== password.value){
                console.log(id);
                network.getadminpost(id)
                window.location = './dashboard.html'
            }
            else{
                alert("Enter the password correctly")
            }
        } else {
            alert("You are not an admin")
        }
    })
})
icon.addEventListener("click" ,() => {
    if (password.type === 'password') {
        icon.classList.add("bi-eye-slash")
        icon.classList.remove("bi-eye")
        password.type = 'text'
      } else {
        icon.classList.remove("bi-eye-slash")
        icon.classList.add("bi-eye")
        password.type = 'password'
      }
})