// const label = document.querySelectorAll("label")
// const content = document.querySelectorAll(".content")
// const icon = document.querySelectorAll("label .bi")
// const input=document.querySelectorAll("[type='radio']")

// label.forEach((elem,i) => {
//     elem.addEventListener("click", () => {
//         icon.forEach((icon, j)=>{
//             if(i==j){
//                 icon.classList.add("bi-dash")
//                 icon.classList.remove("bi-plus")

//             }
//             else{
//                 icon.classList.remove("bi-dash")
//                 icon.classList.add("bi-plus")

//             }
//         })
//     })
// })

// const text = document.querySelector(".text")
// const mainAccor = document.querySelectorAll(".main-accordion")
// // const li=document.querySelectorAll("li")
// const ul = document.querySelector(".accordion")

// ul.innerHTML = ``

// mainAccor.forEach((elem, i) => {
//     elem.addEventListener("click", () => {
//         console.log("djfbjad", i);
//         if (i == 0) {
//             ul.innerHTML = `
//                         <li>
//                         <label for="first"><i class="bi bi-arrow-right-short"></i>Should</label>
//                         <input type="radio" name="accordion" id="first" checked>
//                         <div class="content">
//                             lkfjnslkfgsj
//                         </div>
//                         </li>
//                         <li>
//                         <label for="second"><i class="bi bi-arrow-right-short"></i>When</label>
//                         <input type="radio" name="accordion" id="second">
//                         <div class="content">
//                             lkfjnslkfgsjalkdjflafljd
//                         </div>
//                         </li>
//                         `
//         }
//     })
// })

const main=document.querySelectorAll(".card-main div")
const cardAccordion=document.querySelector(".card-accordion")


main.forEach((elem, i) => {
    elem.addEventListener("click", () => {
        cardAccordion.innerHTML=``
        if(i==0){
            cardAccordion.innerHTML=`
            <div class="card-accordion">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Accordion Item #1
                                    </button>
                                  </h2>
                                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                  </div>
                                </div>
                                <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Accordion Item #2
                                    </button>
                                  </h2>
                                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                  </div>
                                </div>
                                <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Accordion Item #3
                                    </button>
                                  </h2>
                                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                  </div>
                                </div>
                                
                              </div>
                        </div>
                                </div>
            `
        }
    })
})