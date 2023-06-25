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

