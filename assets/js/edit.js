const id=new URLSearchParams(window.location.search).get('id')
const title=document.querySelector("#title")
const overview=document.querySelector("#overview")
const img=document.querySelector("img")
const iframe=document.querySelector("iframe")
const imgButton=document.querySelector(".img-button")
const save=document.querySelector(".save")
const imgFile=document.querySelector("#img-file")
const videFile=document.querySelector("#video-file")
console.log(id, "ahsdfs");

if(id){
    network.getfetchById(id).then(data => {
        title.value=data.original_title;
        overview.value=data.overview;
        img.src=`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`
        iframe.src=`https://www.youtube.com/embed/${data.key}?si=J50oRX8ZcO58lLW2`
    })
}

imgFile.addEventListener("input", () => {
    const i = imgFile.files[0]
    if(i){
        const reader = new FileReader()
        reader.readAsDataURL(i)
        reader.addEventListener("load", () => {
            img.src= reader.result
        })
    }
})

videFile.addEventListener("input", () => {
    const i = imgFile.files[0]
    if(i){
        const reader = new FileReader()
        reader.readAsDataURL(i)
        reader.addEventListener("load", () => {
            iframe.src= reader.result
        })
    }
})

save.addEventListener("click", () => {
    if(id){
        network.getfetchput(id, {
            original_title:title.value,
            overview:overview.value,
            poster_path:img.src,
            key : iframe.src
        })
    }
})