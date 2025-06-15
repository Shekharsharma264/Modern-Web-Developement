const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower() {
    var circle = document.querySelector("#circle");
    window.addEventListener("mousemove", (dtls) => {
        circle.style.transform = `translate(${dtls.clientX}px,${dtls.clientY}px)`;
    });
}
circleMouseFollower();

function firstPageAni(){
    var tl=gsap.timeline();

    tl.from("#navbar",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".loadingAnimationEL",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.2,
        stagger:.2
    })
}
firstPageAni();

var names=document.querySelectorAll(".names");
names.forEach((name)=>{
    var rotate=0;
    var diffrot=0;
    name.addEventListener("mousemove",(dtls)=>{
        var diff=dtls.clientY - (name.getBoundingClientRect().top+90);

        diffrot=dtls.clientX-rotate;
        rotate=dtls.clientX;
        gsap.to(name.querySelector("img"),{
            opacity:1,
            ease: Power3,
            top:diff,
            left:dtls.clientX,
            duration:0.5,
            rotate:gsap.utils.clamp(-20,20,diffrot)
        });
    });

    name.addEventListener("mouseleave",()=>{
        gsap.to(name.querySelector("img"),{
            opacity:0,
            ease: Power3
        });
    });
});
