let tl=gsap.timeline();

tl.from("h2",{
    y:-50,
    duration:0.6,
    delay:0.5
})
tl.from("h4",{
    y:-50,
    duration:1,
    stagger:-0.2
})