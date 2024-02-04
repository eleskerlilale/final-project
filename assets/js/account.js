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


const login=document.querySelector(".login")
const register=document.querySelector(".register")
const loginPage=document.querySelector(".login-page")
const registerPage=document.querySelector(".register-page")

login.addEventListener("click", () => {
    loginPage.style.display='flex'
    registerPage.style.display='none'
    login.classList.add("active")
    register.classList.remove("active")
})
register.addEventListener("click", () => {
    registerPage.style.display='flex'
    loginPage.style.display='none'
    login.classList.remove("active")
    register.classList.add("active")
})

const emailLog=document.querySelector("#email-log")
const passwordLog=document.querySelector("#password-log")
const buttonLog=document.querySelector(".log-button")

const emailReg=document.querySelector("#email-reg")
const passwordReg=document.querySelector("#password-reg")
const buttonReg=document.querySelector(".register-button")

const key=document.querySelector("#key-input")
const keyButton=document.querySelector(".key-button")

let keystring=''
let account={
    email:'',
    password:""
}
buttonReg.addEventListener("click", () => {
    if(!emailReg.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && !password1.value.match( /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/)){
        emailReg.style.borderColor='red'
    }else{
        registerPage.style.display='none'
        const messages=Math.floor(Math.random() * 9000) + 1000;

        keystring=`${messages}`
        account.email=`${emailReg.value}`
        account.password=`${passwordReg.value}`

        emailjs.init("YYynOFfdG-YgR_cIO")
        const params= {
            sendername : "Avios",
            to : document.querySelector("#email-reg").value,
            subject : "Key",
            message :" Key: " + keystring
        };
        const servicId= "service_b9nzc0s";
        const templateId="template_lm5owkj";
        console.log(account);
        network.getfetchpost({account}).then(res => console.log(res))
        emailjs.send(servicId, templateId, params)
        .then( res => {
            alert("email send")
        })
        .catch();
    }
})

keyButton.addEventListener("click", () => {
    if(key.value==keystring){
        console.log("dogru", keystring, key.value);
        loginPage.style.display='flex'
        registerPage.style.display='none'
        login.classList.add("active")
        register.classList.remove("active")
        console.log(account);
        emailLog.value=account.email
        passwordLog.value=account.password

    }else{
        console.log("yanlis",keystring, key.value);
    }
})


// function sendEmail(){
//     console.log("dlkbfljadbf", random());
    
// }
// if(){
//     text[0].innerText=``
//     icon[2].innerHTML=`<i class="bi bi-check-circle"></i>`
// }