// GSAP ANIMATIONS
var tl = gsap.timeline();
tl.from('nav',{
    duration:1,
    opacity:0,
    y:-100
})
tl.from('h2,span',{
    duration:1,
    opacity:0,
    y:60,
    stagger:0.6
})

tl.from('.buttons',{
    duration:1,
    opacity:0,
    x:-100
},"=-2")


tl.from('.laptop',{
    duration:1,
    opacity:0,
    x:70
},"=-2")

tl.from('.laptop-slider',{
    duration:0.2,
    opacity:0,
    y:10
},"=-1")





//DOM 


var laptopslideshow = w3.slideshow(".laptop",0);

var tl2 = gsap.timeline();

document.querySelector('.left-arrow').addEventListener('click',()=>{
    laptopslideshow.previous();
    tl2.from('.laptop',{
        duration:1,
        x:70
    })
})

document.querySelector('.right-arrow').addEventListener('click',()=>{
    laptopslideshow.next();
    tl2.from('.laptop',{
        duration:1,
        x:-70
    })
})

document.querySelector('button').addEventListener('click',()=>{
    tl.reverse();
})


