// typed js animation
// animating texts
let typed = new Typed(".auto-type" , {
    strings: ["" , "Software Developer", "Team Lead" , "Debugger"],
    typeSpeed: 90,
    backSpeed: 70,
    loop:true
});

let hamburger = document.querySelector(".hamburger")
let cancelButton = document.querySelector(".cancel-button")

function hamburgerDisplay(){
    hamburger.classList.add('hide')
    cancelButton.classList.add('show')
}
hamburger.addEventListener("click" , hamburgerDisplay)



function cancelDisplay(){
    hamburger.classList.add('hide')
    cancelButton.classList.remove('hide')
    cancelButton.classList.add('show')
}
cancelButton.addEventListener("click" , cancelDisplay)
// hamburger click
// hamburger.onclick = function(){
//     hamburger.classList.add('hide')
//     cancelButton.classList.add('show')
// }

// // cancel click
// cancelButton.onclick = function(){
//     cancelButton.classList.add('hide')
//     hamburger.classList.remove('hide')
// }