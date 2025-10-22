let header = document.getElementById("nav");
let judulHeader = document.getElementById("brand1");
let judulHeader2 = document.getElementById("brand2");
let logoBrand = document.getElementById("logo_brand")
let nav = document.getElementsByClassName("link-nav");
let main = document.getElementsByClassName("ketentuan_peserta")

window.onscroll = function(){Headers()}
function Headers(){

    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        header.style.position = "fixed";  
        main[0].style.top = "100px"
    } else {
        header.style.position = "relative";
        main[0].style.top = "0px"
    }


}
