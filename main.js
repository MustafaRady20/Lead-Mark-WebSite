
const icon=document.getElementsByClassName("icon");
const list=document.getElementsByClassName("links");

icon[0].addEventListener('click',()=>{
    list[0].classList.toggle("open")
})

// const navbar=document.getElementById("nav")
// const listlinks=document.getElementsByClassName("lin")
// window.addEventListener('scroll',(e)=>{   
//     e.preventDefault();
//     if(window.scrollY>100)
//     {
//         navbar.classList.add("scrolling")
//     }
//     else
//     {
//         navbar.classList.remove("scrolling")
//     }
// })
