var data = gsap.timeline()

data.to("#yellow", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out"
})
data.from("#yellow2", {
    top: "100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out"
}, "anim")
data.to("#loader h1", {
    delay: 0.5,
    duration: 0.5,
    color: "black"
    // display:"none",
}, "anim")
data.to("#loader", {
    display: "none",
})

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
})

let elems = document.querySelectorAll(".elem");
let main = document.querySelector(".page2");
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        let bgimg = ele.getAttribute("data-img")
        main.style.backgroundImage = `url(${bgimg})`
    })
})


document.querySelector("footer .back-to-top-container").addEventListener("click",()=>{
    scroll.scrollTo(0)
})