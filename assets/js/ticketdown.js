function generate(){
    console.log("sdfgsd");
    const elem=document.querySelector("#invoice")
    console.log(window);
    console.log(elem);
    html2pdf().from(elem).save()
    console.log("dfgsdf");
}