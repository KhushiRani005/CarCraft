let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
       search.classList.toggle('active');
       menu.classList.remove('active');
}
let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
       menu.classList.toggle('active');
       search.classList.remove('active');
}
//Hide Menu and Search Box on Scroll
window.onscroll =() => {
       menu.classList.remove('active');
       search.classList.remove('active');
}

//Header
let header = document.querySelector('search-box');

window.addEventListener('scroll', () => {
       header.classList.toggle('shadow', window.scrolly >0);     
});

//home page
const loginmessage =localStorage.getItem('loginStatus');

if(loginmessage){
       document.getElementById('loginmessage').innerHTML=loginmessage;
}

setTimeout(function(){
       localStorage.removeItem('loginStatus');
       document.getElementById('loginmessage').innerHTML="Login";
},60000);