// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "eleskerlilale@gmail.com",
//         Password : "DE4E5540F856E620354422058FEB7D1BA129",
//         To : 'eleskerlilale@gmail.com',
//         From : "eleskerlilale@gmail.com",
//         Subject : "new message",
//         Body : "name"
//     }).then(
//       message => alert(message)
//     );
// }
const nav = document.querySelector("nav")
const menuList = document.querySelector(".menu-list")
const resMenuList = document.querySelector(".res-menu-list")
const resMenuListPElem = document.querySelector(".res-menu-list p")
const menuButton = document.querySelector(".menu")
const subNav = document.querySelectorAll(".sub-nav")
const movieSub = document.querySelectorAll(".movie-sub")
const movieCategory = document.querySelector(".movie-category")
const subNavSecond = document.querySelector(".sub-nav-second")

// menuList.style.zIndex='-100'
movieSub.forEach((movieSub, i) => {
  movieSub.addEventListener("click", () => {
    if (movieSub.classList.value == 'movie-sub') {
      subNav[i].style.maxHeight = '150px'
      movieSub.style.color = ' #d96c2c'
      movieSub.classList.add("active")
    } else {
      subNav[i].style.maxHeight = '0'
      movieSub.style.color = 'white'
      movieSub.classList.remove("active")
    }
  })
})
movieCategory.addEventListener("click", () => {
  if (movieCategory.classList.value == 'movie-category') {
    subNavSecond.style.maxHeight = '80px'
    movieCategory.style.color = ' #d96c2c'
    movieCategory.classList.add("active")
  }
  else {
    subNavSecond.style.maxHeight = '0'
    movieCategory.style.color = ' white'
    movieCategory.classList.remove("active")
  }
})
menuButton.addEventListener("click", () => {
  menuList.style.zIndex = '110'
  resMenuList.style.left = '0'
})
resMenuListPElem.addEventListener("click", () => {
  menuList.style.zIndex = '-10'
  resMenuList.style.left = '-300px'
})

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    nav.style.backgroundColor = "black"
  } else {
    nav.style.backgroundColor = "transparent"
  }
})

window.addEventListener("load", () => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      nav.style.backgroundColor = "black"
    } else {
      nav.style.backgroundColor = "transparent"
    }
  })
  
const login = document.querySelector(".login")
const register = document.querySelector(".register")
const loginPage = document.querySelector(".login-page")
const registerPage = document.querySelector(".register-page")

login.addEventListener("click", () => {
    loginPage.style.display = 'flex'
    registerPage.style.display = 'none'
    login.classList.add("active")
    register.classList.remove("active")
})
register.addEventListener("click", () => {
    registerPage.style.display = 'flex'
    loginPage.style.display = 'none'
    login.classList.remove("active")
    register.classList.add("active")
})

const emailLog = document.querySelector("#email-log")
const passwordLog = document.querySelector("#password-log")
const buttonLog = document.querySelector(".log-button")
const problemLog = document.querySelector(".email-problem-log")

const emailReg = document.querySelector("#email-reg")
const passwordReg = document.querySelector("#password-reg")
const buttonReg = document.querySelector(".register-button")
const problemReg = document.querySelector(".email-problem-reg")

const keyPage = document.querySelector(".key-page")
const key = document.querySelector("#key-input")
const keyButton = document.querySelector(".key-button")

const icons = document.querySelectorAll(".bi-eye")
const nameAccount=document.querySelector(".search span")

let keystring = ''
let account = {
    email: '',
    password: ""
}

icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        if (index == 0) {
            if (passwordLog.type === 'password') {
                icon.classList.add("bi-eye-slash")
                icon.classList.remove("bi-eye")
                passwordLog.type = 'text'
            } else {
                passwordLog.type = 'password'
                icon.classList.remove("bi-eye-slash")
                icon.classList.add("bi-eye")
            }
        } else {
            if (passwordReg.type === 'password') {
                icon.classList.add("bi-eye-slash")
                icon.classList.remove("bi-eye")
                passwordReg.type = 'text'
            } else {
                icon.classList.remove("bi-eye-slash")
                icon.classList.add("bi-eye")
                passwordReg.type = 'password'
            }
        }
    })
})

buttonReg.addEventListener("click", () => {
    if (!(emailReg.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && passwordReg.value.match(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/))) {
        emailReg.style.borderColor = 'red'
        passwordReg.style.borderColor = 'red'
    } else {
        network.getfetchaccount().then(data => {
            console.log(data)
            // data.forEach(data => {
            const id = data.find(f => f.email == emailReg.value)
            if (!id) {
                const messages = Math.floor(Math.random() * 9000) + 1000;
                keystring = `${messages}`
                account.email = `${emailReg.value}`
                account.password = `${passwordReg.value}`

                emailjs.init("YYynOFfdG-YgR_cIO")
                const params = {
                    sendername: "Avios",
                    to: document.querySelector("#email-reg").value,
                    subject: "Key",
                    message: " Key: " + keystring
                };
                const servicId = "service_b9nzc0s";
                const templateId = "template_lm5owkj";
                console.log(account);
                network.getfetchpost(account).then(res => console.log(res))

                emailjs.send(servicId, templateId, params)
                    .then(res => {
                        // alert("send")
                        registerPage.style.display = 'none'
                        keyPage.style.display = 'block'
                    })
                    .catch();
            }
            else {
                problemReg.innerText = `The e-mail you added is registered on our site. Try again.`
            }
        })
        // })
    }
})

keyButton.addEventListener("click", () => {
    if (key.value == keystring) {
        console.log("dogru", keystring, key.value);
        loginPage.style.display = 'flex'
        registerPage.style.display = 'none'
        login.classList.add("active")
        register.classList.remove("active")
        console.log(account);
        emailLog.value = account.email
        passwordLog.value = account.password
    } else {
        console.log("yanlis", keystring, key.value);
    }
})

buttonLog.addEventListener("click", () => {
    if (!(emailLog.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && passwordLog.value.match(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/))) {
        emailLog.style.borderColor = 'red'
        passwordLog.style.borderColor = 'red'
    } else {
      network.getfetchaccount().then(data => {
        const address = data.find(f => f.email == emailLog.value)
        const parol = data.find( f => f.password == passwordLog.value)
        if(address && parol){
            nameAccount.innerText=`${address.email}`
            window.location='index.html'
        }else{
            console.log(address, parol);
        }
    })
    }
})
