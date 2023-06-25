// typed js animation
// animating texts
let typed = new Typed(".auto-type" , {
    strings: ["" , "Software Developer", "Team Lead" , "Debugger"],
    typeSpeed: 90,
    backSpeed: 70,
    loop:true
});

let hamburger = document.querySelector(".hamburger")
let cancelSidebar = document.querySelector(".cancel-sidebar")
let sidebar = document.querySelector(".sidebar")
let overlay = document.querySelector(".overlay")
let testimony = document.querySelector(".testimony")
let names = document.querySelector(".name")
let forward = document.querySelector(".forward")
let current = 0
let testimonials = [
    {
        "id": "0",
        "name": "Sanni Hammed",
        "job": "Software Developer",
        "grade": "Excellent",
        "speech": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique assumenda quis eligendi, aliquam optio voluptate at animi facere incidunt tempore minima ipsa vero. Nemo consequuntur maxime nihil beatae rem?",
        "project": "Team Collaboration - Software"
    },
    {
        "id": "0",
        "name": "Abdulrahman Luqman",
        "job": "Software Developer",
        "grade": "VERY GOOD",
        "speech": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique assumenda quis eligendi, aliquam optio voluptate at animi facere incidunt tempore minima ipsa vero. Nemo consequuntur maxime nihil beatae rem?",
        "project": "Team Collaboration - Software"
    },
    {
        "id": "0",
        "name": "Anjorin Muhsin",
        "job": "Chief Technology Officer",
        "grade": "Excellent",
        "speech": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique assumenda quis eligendi, aliquam optio voluptate at animi facere incidunt tempore minima ipsa vero. Nemo consequuntur maxime nihil beatae rem?",
        "project": "Top Notch Solution - Clients"
    },
]   


// show sidebar
function collapse(){
    sidebar.classList.add('slide')
    overlay.classList.add('show-overlay')
}
hamburger.addEventListener("click" , collapse)

// hide sidebar
function cancel(){
    sidebar.classList.remove('slide')
    overlay.classList.remove('show-overlay')
}
cancelSidebar.addEventListener("click" , cancel)

// clicking overlay
overlay.addEventListener("click" , cancel)

// for testimonials


// testimonials
for(i in testimonials){
    if(testimonials[i] === testimonials[current]){
        names.innerHTML = testimonials[i].name
    }
    console.log(testimonials[i].name)
}

forward.addEventListener("click" , incCurrent)
function incCurrent(){
    current = current+1
    console.log(current)
}