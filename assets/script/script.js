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
let job = document.querySelector(".job")
let grade = document.querySelector(".grade")
let project = document.querySelector(".work")
let speech = document.querySelector(".speech")
let image = document.querySelector(".img-for-testimonial")
let forward = document.querySelector(".forward")
let backward = document.querySelector(".backward")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let education = document.querySelector(".education")
let profession = document.querySelector(".profession")
let experience = document.querySelector(".experience")
let interview = document.querySelector(".interview")
let detailsOne = document.querySelector(".details-one")
let detailsTwo = document.querySelector(".details-two")
let current = 0
let testimonials = [
    {
        "id": 0,
        "name": "Ayomide Akanji",
        "job": "Motion Designer",
        "grade": "Teksight Edge, Nigeria",
        "speech": "Working with Sanni was a nice experience. The entire process, from consultation to completion, was smooth. The final product exceeded my expectations, and we couldn't be happier. His attention to detail and dedication is unmatched",
        "project": "Personal Portfolio - Web App",
        "image": "/assets/img/azeem_pic.png"
    },
    {
        "id": 1,
        "name": "Anjorin Muhsin",
        "job": "Chief Technology Officer",
        "grade": "DERVAC LTD",
        "speech": "Sanni's work is professional. He turned our vision into reality with precision and creativity. Every feature we requested was delivered flawlessly. His professionalism and technical expertise made the entire project seamless and efficient",
        "project": "Top notch Solutions - Client",
        "image": "/assets/img/anjorin.png"
    },
    {
        "id": 2,
        "name": "Abdulqoyum Aliy",
        "job": "Software Developer",
        "grade": "Simplified UX",
        "speech": "Sanni is a true professional. He took the time to understand our project requirements and provided insightful solutions. The final software delivered was both functional and user-friendly. We are extremely satisfied with their services",
        "project": "Team Collaboration - Software",
        "image": "/assets/img/aliy.png"
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

// forward
forward.addEventListener("click" , incCurrent)

function incCurrent(){
    for(i in testimonials){
        if(testimonials[i] === testimonials[current]){
            names.innerHTML = testimonials[i].name
            speech.innerHTML = testimonials[i].speech
            job.innerHTML = testimonials[i].job
            project.innerHTML = testimonials[i].project
            image.setAttribute('src' , `${testimonials[i].image}`)
            grade.innerHTML = testimonials[i].grade
        }
       
        if(current == 0){
            one.style.backgroundColor = 'red'
            console.log(current)
        }else if(current == 1){
            two.style.backgroundColor = 'red'
            one.style.backgroundColor = 'gray'
        }else if(current == 2){
            two.style.backgroundColor = 'gray'
            three.style.backgroundColor = 'red'
        }
    }

    if(current <= testimonials.length-1){
        current = current+1
    }
}

// backward
backward.addEventListener("click" , decCurrent)

function decCurrent(){
    for(i in testimonials){
      
        if(testimonials[i] === testimonials[current]){
            names.innerHTML = testimonials[i].name
            speech.innerHTML = testimonials[i].speech
            job.innerHTML = testimonials[i].job
            project.innerHTML = testimonials[i].project
            image.setAttribute('src' , `${testimonials[i].image}`)
            grade.innerHTML = testimonials[i].grade
        }
        if(current == 2){
            two.style.backgroundColor = 'red'
            three.style.backgroundColor = 'gray'
        }else if(current == 1){
            one.style.backgroundColor = 'red'
            two.style.backgroundColor = 'gray'
        }
      
     
    }
    if(current >= 1){
        current = current-1
        console.log(current)
    }    
}


// for resume
detailsTwo.classList.add('for-resume')

profession.onclick = function(){
    profession.classList.add('active-resume')
    education.classList.remove('active-resume')
    interview.classList.remove('active-resume')
    experience.classList.remove('active-resume')
    detailsOne.classList.add('for-resume')
    detailsTwo.classList.remove('for-resume')
}

education.onclick = function(){
    education.classList.add('active-resume')
    profession.classList.remove('active-resume')
    interview.classList.remove('active-resume')
    experience.classList.remove('active-resume')
    detailsOne.classList.remove('for-resume')
    detailsTwo.classList.add('for-resume')
}

experience.onclick = function(){
    experience.classList.add('active-resume')
    education.classList.remove('active-resume')
    profession.classList.remove('active-resume')
    interview.classList.remove('active-resume')
}

interview.onclick = function(){
    interview.classList.add('active-resume')
    education.classList.remove('active-resume')
    profession.classList.remove('active-resume')
    experience.classList.remove('active-resume')
}