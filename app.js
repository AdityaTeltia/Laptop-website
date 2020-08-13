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


const laptops = ["matebook","matebook2"];
//DOM 
document.querySelector('.left-arrow').addEventListener('click', () => {
    laptops.forEach((laptop)=>{
        document.querySelector('.laptop').src = `/img/${laptop}.png`
    })
})