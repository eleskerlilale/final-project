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
const loginRegisterPage=document.querySelector(".login-register")
const loginPage = document.querySelector(".login-page")
const registerPage = document.querySelector(".register-page")
const main = document.querySelector(".login-register .main")
const accountpage = document.querySelector("#login-register .account")
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

const usernameReg=document.querySelector(".username")
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
    username:"",
    password: "",
    favorite:[],
    date:[]
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

network.getfetchaccount().then(data => {
  if(data.length==1){
    nameAccount.style.display='block'
    nameAccount.innerText = `${data[0].email}`
    loginRegisterPage.style.display='none'
    accountpage.style.display='flex'
  }else{
    loginRegisterPage.style.display='flex'
    accountpage.style.display='none'
  }
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
                account.username=`${usernameReg.value}`
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
                
                network.getpostaccount(account).then(res => console.log(res))

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
      network.getMainaccount().then(data => {
        data.forEach(element => {
          if(element.email== emailLog.value && element.password== passwordLog.value){
            console.log(element);
            loginRegisterPage.style.display='none'
            accountpage.style.display='flex'
            network.getpostaccount(element).then(data => console.log("drgsdgdg"))

          }
        })
        
        const address = data.find(f => f.email == emailLog.value );
        const parol = data.find( f => f.password == passwordLog.value);
        if(address && parol){
          console.log(data);
            // nameAccount.innerText=`${address.email}`
            // window.location='index.html'
            
        }else{
            console.log(address, parol);
        }
    })
    }
})


// {
//   "email": "eleskerlilale@gmail.com",
//   "password": "1!Aa1234",
//   "id": 2,
//   "favorite": [
//     {
//       "id": 1022796,
//       "imdb_id": "tt11304740",
//       "original_language": "en",
//       "original_title": "Wish",
//       "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
//       "popularity": 1428.915,
//       "poster_path": "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
//       "runtime": 95,
//       "vote_average": 6.665,
//       "video_poster": "https://nerdreactor.com/wp-content/uploads/2023/11/wish-movie.jpg",
//       "key": "eQPeGiCH7A0",
//       "genres": [
//         {
//           "id": 16,
//           "name": "Animation"
//         },
//         {
//           "id": 10751,
//           "name": "Family"
//         },
//         {
//           "id": 14,
//           "name": "Fantasy"
//         },
//         {
//           "id": 12,
//           "name": "Adventure"
//         }
//       ],
//       "date": [
//         {
//           "id": 1,
//           "movieId": 787699,
//           "date": "23/02/2024",
//           "time": "10:30",
//           "seat": "",
//           "price": ""
//         },
//         {
//           "id": 2,
//           "movieId": 787699,
//           "date": "01/03/2024",
//           "time": "10:30",
//           "seat": "",
//           "price": ""
//         }
//       ]
//     }
//   ],
//   "date": [
//     {
//       "movieId": 1022796,
//       "date": "23/02/2024",
//       "time": "10:30",
//       "seat": ""
//     }
//   ]
// }