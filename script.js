document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"), nav=document.querySelector(".site-header nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open);});
