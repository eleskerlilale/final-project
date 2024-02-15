const nav = document.querySelector("nav")
const menuList = document.querySelector(".menu-list")
const resMenuList = document.querySelector(".res-menu-list")
const resMenuListPElem = document.querySelector(".res-menu-list p")
const menuButton = document.querySelector(".menu")
const subNav = document.querySelectorAll(".sub-nav")
const movieSub = document.querySelectorAll(".movie-sub")
const subNavSecond = document.querySelector(".sub-nav-second")
const accountA = document.querySelector(".search a")
const accountback = document.querySelector(".search")

network.getfetchaccount().then(data => {
  accountA.innerHTML = `${data[0].username[0].toUpperCase()}`
  accountback.style.backgroundColor = '#' + `${data[0].color}`
})

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
const loginRegisterPage = document.querySelector(".login-register")
const loginPage = document.querySelector(".login-page")
const registerPage = document.querySelector(".register-page")
const main = document.querySelector(".login-register .main")
const accountpage = document.querySelector("#account-test")
console.log(accountpage);

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

const usernameReg = document.querySelector("#username-reg")
const emailReg = document.querySelector("#email-reg")
const passwordReg = document.querySelector("#password-reg")
const buttonReg = document.querySelector(".register-button")
const problemReg = document.querySelector(".email-problem-reg")

const keyPage = document.querySelector(".key-page")
const key = document.querySelector("#key-input")
const keyButton = document.querySelector(".key-button")

const icons = document.querySelectorAll(".bi-eye")
const nameAccount = document.querySelector(".search span")
const logOut = document.querySelector(".log-out")
const load = document.querySelector(".loading")
const problemregusername = document.querySelector(".username-problem-reg")
const problemregpassword = document.querySelector(".password-problem-reg")
const problemlogpassword = document.querySelector(".password-problem-log")
const problemlogemail = document.querySelector(".email-problem-log")

key.addEventListener("input", () => {
  if (key.value.length == 4) {
    key.style.caretColor = 'transparent'
  } else {
    key.style.caretColor = 'black'
  }
})

let keystring = ''
let account = {
  email: '',
  username: "",
  password: "",
  color: "",
  favorite: [],
  date: []
}
logOut.addEventListener("click", () => {
  network.getfetchaccount().then(data => {
    network.getaccountDelete(data[0].id)
    window.location.reload()
  })
})


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

network.getfetchaccount().then(data => {
  if (data.length == 1) {
    username.value = data[0].username
    email.value = data[0].email
    password.value = data[0].password
    loginRegisterPage.style.display = 'none'
    accountpage.style.display = 'flex'

  } else {
    loginRegisterPage.style.display = 'flex'
    accountpage.style.display = 'none'
  }
})
let yoxlama = ''
buttonReg.addEventListener("click", () => {
  problemReg.innerText = ''
  console.log(usernameReg.value);
  if (!(emailReg.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
    emailReg.style.borderColor = 'red'
  } if (!(passwordReg.value.match(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/))) {
    passwordReg.style.borderColor = 'red'
    problemregpassword.innerText = `
    The password should consist of numbers, letters and special symbols and have at least 8 characters
    `
  }
  if (usernameReg.value == '' || Number(usernameReg.value[0])) {
    usernameReg.style.borderColor = 'red'
    problemregusername.innerText = `Username not be kept empty and cannot start with a number`
  }
  else {
    yoxlama = ''
    network.getMainaccount().then(data => {
      console.log(data)
      data.forEach(data => {
        if (data.email.includes(emailReg.value)) {
          yoxlama = 'true'
          problemReg.innerText = `The e-mail you added is registered on our site. Try again.`

          console.log(data.email, emailReg.value, yoxlama, data.username);
        } if (data.username.includes(usernameReg.value)) {
          yoxlama = 'true'
          problemregusername.innerText = `This username has been used by someone else`
        }
      })
      if (yoxlama != 'true') {
        load.style.display = 'block'

        yoxlama = ''
        console.log(yoxlama, "girdi");
        const messages = Math.floor(Math.random() * 9000) + 1000;
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        keystring = `${messages}`
        account.email = `${emailReg.value}`
        account.username = `${usernameReg.value}`
        account.password = `${passwordReg.value}`
        account.color = `${randomColor}`
        emailjs.init("YYynOFfdG-YgR_cIO")
        const params = {
          sendername: "Avios",
          to: document.querySelector("#email-reg").value,
          subject: "Key",
          message: " Key: " + keystring
        };
        const servicId = "service_b9nzc0s";
        const templateId = "template_lm5owkj";
        console.log(account, keystring);


        emailjs.send(servicId, templateId, params)
          .then(res => {
            registerPage.style.display = 'none'
            keyPage.style.display = 'block'
          })
          .catch();
      }

    })
  }
})

keyButton.addEventListener("click", () => {
  if (key.value == keystring) {
    network.getpostmainaccount(account).then(res => console.log(res))
    console.log("dogru", keystring, key.value);
    loginPage.style.display = 'flex'
    registerPage.style.display = 'none'
    keyPage.style.display = 'none'
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
  network.getMainaccount().then(data => {
    const id = data.find(f => f.email == emailLog.value)
    if (id) {
      if (id.password == passwordLog.value) {
        loginRegisterPage.style.display = 'none'
        accountpage.style.display = 'flex'
        network.getpostaccount(element)
        window.location.reload()
      }
      else {
        problemlogpassword.innerText = `Password is incorrect`
      }
    } else {
      problemlogemail.innerText = `You are not registered`
    }
  })
})


const accountWhole = document.querySelectorAll(".whole >div")
const cartMain = document.querySelectorAll("#account-test .card-main >div")
const myAccount = document.querySelector(".my-account")
const wishlist = document.querySelector(".wishlist")
const myAccountPage = document.querySelector(".my-account-page")
const wishlistPage = document.querySelector(".wishlist-page")
const wishlistTbody = document.querySelector(".wishlist-page table tbody")
const ticketbtn = document.querySelector(".ticket-btn")
const ticketTboy = document.querySelector(".ticket-page table tbody")
const ticketPage = document.querySelector(".ticket-page")
// console.log(cartMain);
const passwordAccount = document.querySelector(".my-account-page #password")
const hidViz = document.querySelector(".my-account-page i")

cartMain.forEach((e) => {
  // e.classList.remove("active")
  e.addEventListener("click", () => {
    cartMain[0].classList.remove("active")
    cartMain[1].classList.remove("active")
    cartMain[2].classList.remove("active")
    cartMain[3].classList.remove("active")
    e.classList.add("active")
  })
})
myAccount.addEventListener("click", () => {
  accountWhole.forEach(a => {
    a.style.display = 'none'
  })
  myAccountPage.style.display = 'flex'

})

hidViz.addEventListener("click", () => {
  if (passwordAccount.type === 'password') {
    hidViz.classList.remove("bi-eye-slash")
    hidViz.classList.add("bi-eye")
    passwordAccount.type = 'text'
  } else {
    hidViz.classList.add("bi-eye-slash")
    hidViz.classList.remove("bi-eye")
    passwordAccount.type = 'password'
  }
})
let date = '';
let time = '';
wishlist.addEventListener("click", () => {
  accountWhole.forEach(a => {
    a.style.display = 'none'
  })
  wishlistPage.style.display = 'flex'
  wishlistTbody.innerHTML = ``
  network.getfetchaccount().then(data => {
    data[0].favorite.forEach(elem => {

      wishlistTbody.innerHTML += `
      <tr>
        <td>${elem.id}</td>
        <td class="name">${elem.original_title}</td>
        <td class="end"><a href='./detail.html?id=${elem.id}'><i class="bi bi-eye-fill"></i></a></td>
        <td class="end" onclick = 'delFunc(${elem.id})'><i class="bi bi-trash3-fill"></i></td>
      </tr>   `
      console.log();
    })
  })
})

ticketbtn.addEventListener("click", () => {
  accountWhole.forEach(a => {
    a.style.display = 'none'
  })
  ticketPage.style.display = 'flex'
  ticketTboy.innerHTML = ``

  network.getfetchaccount().then(data => {
    data[0].date.forEach(elem => {
      ticketTboy.innerHTML += `
      <tr>
        <td>${elem.movieId}</td>
        <td class="name">${elem.movieName}</td>
        <td>${elem.date}</td>
        <td>${elem.time}</td>
        <td><a href='./ticketpdf.html?id=${elem.movieId}&date=${elem.date}&time=${elem.time}'><i class="bi bi-download"></i></a></td>
      </tr> `
    })
  })

})

function delFunc(id) {
  network.getfetchaccount().then(data => {
    data[0].favorite.forEach(elem => {
      if (id == elem.id) {
        const k = data[0].favorite.indexOf(elem)
        console.log(k);
        if (k != 0) {
          favorite = data[0].favorite.slice(0, k).concat(data[0].favorite.slice(k + 1))
        } else {
          favorite = data[0].favorite.slice(1)
        }
        console.log(data[0].id, favorite);
        network.getaccountpath(data[0].id, { favorite: favorite })
        network.getmainaccountpath(data[0].id, { favorite: favorite })
        window.location.reload()
      }
    })
  })
}