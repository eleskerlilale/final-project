const main = document.querySelectorAll(".card-main div")
const cardAccordion = document.querySelector(".card-accordion")
const accordionButton=document.querySelectorAll(".accordion-button")

main.forEach((elem, i) => {
  elem.addEventListener("click", () => {
    if (i == 0) {
      elem.classList.add("active")
      main[1].classList.remove("active")
      main[2].classList.remove("active")
      main[3].classList.remove("active")
      accordionButton[0].innerText=`Should I use internal employees or hire professional actors in my video?`
      accordionButton[1].innerText=`When does a certain movie come out on dvd?`
      accordionButton[2].innerText=`How do I submit ideas or scripts to be considered?`
      accordionButton[3].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[4].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[5].innerText=`Preparation of documents required for the planned route?`
      accordionButton[6].innerText=`How can I watch digiflex on my TV?`
      accordionButton[7].innerText=`How do I access the movix account?`        
    }
    else if(i==1){
      elem.classList.add("active")
      main[0].classList.remove("active")
      main[2].classList.remove("active")
      main[3].classList.remove("active")
      accordionButton[0].innerText=`When does a certain movie come out on dvd?`
      accordionButton[1].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[2].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[3].innerText=`Preparation of documents required for the planned route?`
      accordionButton[4].innerText=`How do I submit ideas or scripts to be considered?`
      accordionButton[5].innerText=`How can I watch digiflex on my TV?`
      accordionButton[6].innerText=`How do I access the movix account?`
      accordionButton[7].innerText=`Should I use internal employees or hire professional actors in my video?`        
    }
    else if(i==2){
      elem.classList.add("active")
      main[1].classList.remove("active")
      main[0].classList.remove("active")
      main[3].classList.remove("active")
      accordionButton[0].innerText=`How do I submit ideas or scripts to be considered?`
      accordionButton[1].innerText=`How can I watch digiflex on my TV?`
      accordionButton[2].innerText=`How do I access the movix account?`
      accordionButton[3].innerText=`Should I use internal employees or hire professional actors in my video?`
      accordionButton[4].innerText=`When does a certain movie come out on dvd?`
      accordionButton[5].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[6].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[7].innerText=`Preparation of documents required for the planned route?`        
    }
    else{
      elem.classList.add("active")
      main[1].classList.remove("active")
      main[2].classList.remove("active")
      main[0].classList.remove("active")
      accordionButton[0].innerText=`Treatment of the bottom with anti-fouling coatings?`
      accordionButton[1].innerText=`Verification of navigation and meteorological equipment?`
      accordionButton[2].innerText=`How do I access the movix account?`
      accordionButton[3].innerText=`When does a certain movie come out on dvd?`
      accordionButton[4].innerText=`Should I use internal employees or hire professional actors in my video?`
      accordionButton[5].innerText=`How can I watch digiflex on my TV?`
      accordionButton[6].innerText=`Preparation of documents required for the planned route?`
      accordionButton[7].innerText=`How can I watch digiflex on my TV?`        
    }
  })
})