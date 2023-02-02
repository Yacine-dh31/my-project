let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");


}
// reviews swiper
var swiper = new Swiper(".reviews-content ", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    
});
// email js
function validate(){
    let name= document.querySelector('.name')
    let email= document.querySelector('.email')
    let msg= document.querySelector('.message')
    let sendbtn= document.querySelector('.send-btn')

    sendbtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(name.value ==""|| email.value =="" || msg.value==""){
            emptyerror();
        }
        else{
            sendmail(name.value, email.value, msg.value);
            success();
        }

    });
}
validate();
function sendmail(name,email,msg){
    emailjs.send("service_il7wufn","template_i7wdvif",{
        to_name: name,
        from_name:email,
        message: msg,
        });
}



function emptyerror() {
    swal({
        title: "OhNoo!",
        text: "fields cannot be empty !",
        icon: "error!",
    });
}
function success() {
    swal({
        title: "Email sent successfuly",
        text: "we try to reply in 24 hours",
        icon: "success",
    });
}
// header background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll' ,() => {
    header.classList.toggle('header-active' ,window.scrollY > 0);
})

// scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll' ,() => {
    scrollTop.classList.toggle('scroll-active' ,window.scrollY >= 400);
})