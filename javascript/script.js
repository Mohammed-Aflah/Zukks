let menu=document.querySelector(".menu");
let links=document.querySelector(".links")
let nav=document.querySelector("#hd")
let inner=document.querySelector("#inner");
let link=document.querySelectorAll(".link");
menu.addEventListener("click",()=>{
    links.classList.toggle("active");
})

window.addEventListener("scroll",()=>{
  
    if(inner.style.top==0){
        inner.style.background="#ffff"
        link.forEach((l)=>{
            l.style.color="black"
        })
    }
    if(inner.style.top!=0){
        inner.style.background="green"

    }
})